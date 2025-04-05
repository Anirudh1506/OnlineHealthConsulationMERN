import mongoose from "mongoose";

export const connectDB=async()=>{
    try{
    const conn=await mongoose.connect(String(process.env.MONGO_FULL_URI));
    console.log(conn.connection.host);
    return conn.connection;
    }catch(e){
        console.log(e); 
    }
}