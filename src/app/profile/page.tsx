"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import {useRouter}  from "next/navigation";


export default function Profile(){
    const router =  useRouter();
    const logout = async () =>{
        try {
            await axios.get("/api/users/logout");
            toast.success("logour successful");
            router.push('/login');
            
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message);

            
            
        }

    }
    return (
        <div>
            <h1>this iss prfoile apge</h1>
            <button 
              onClick={logout}
            >Logout </button>
        </div>
    )
}