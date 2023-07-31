import mongoose from "mongoose";

export  function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on("connected" , () =>{
            console.log("MongoDB ho gya  connected Successfully");
        })
        connection.on("error" , (err) =>{
            console.log("mongdb connection error .please make sure that mnongdb is running" + err);
            process.exit();
        })

        
    } catch (error) {
        console.log("something went wrong");
        console.log(error);

        
    }
}