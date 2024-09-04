import 'dotenv/config';
// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

connectDB();

// Always connect database using try-catch block and also use async and await 

// Not good approach for connecting db we use ifi ;()(); 
// function connectDB(){

// }
// connectDB();

// import express from "express";
// const app = express();
// ;(async()=>{
//     try {
//    // uri+<db_name>
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("Error:", error);
//             throw error;
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(process.env.PORT);
            
//         })

//     } catch (error) {
//         console.log("Error",error);
//         throw error;
//     }
// })();