import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/usermodel";
import bcryptjs from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email , password } = reqBody;
        console.log(reqBody);

        // check if user exits 
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({error:"User does not exist !"} , {status:400});
        }

        // check if the password is correct
        const validpassword = await bcryptjs.compare(password, user.password);
        if(!validpassword){
            return NextResponse.json({error:"INvalid user password"} , {status:400})
        }

        // create token data
        const tokendata = {
            id: user._id,
            email: user.email,
            username: user.username
        }

        // create token
        const token = await jwt.sign(tokendata, process.env.TOKEN_SECRET!, {expiresIn: "1d"} )


        const response = NextResponse.json({
            message:"Login Sucessful",
            success:true,
        })

        response.cookies.set("token" , token , {
            httpOnly:true,
            
        })
        return response;




    } catch (error:any) {
        return NextResponse.json({error:error.message}, {status:500});
        
    }
}