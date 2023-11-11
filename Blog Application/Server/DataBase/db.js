import mongoose from "mongoose";
import * as dotenv from 'dotenv' 
dotenv.config()
const UserName=process.env.DB_USERNAME;
const Password=process.env.DB_PASSWORD;
const Connection = async () => {
  //promise based //
  //we could also have used try and catch //
  //NewUrlParser not used in mongo connect
  // const db_link = `mongodb+srv://${UserName}:${Password}@blog-app.aqtntyv.mongodb.net/`;
  const db_link=`mongodb+srv://kaushal:${Password}@blog-app.aqtntyv.mongodb.net/?retryWrites=true&w=majority`;
  
  await mongoose
    .connect(db_link)
    .then((db) => {
    //   console.log(db);
      console.log("db Connected");
    })
    .catch((err) => {
      console.log("error to connect db : ", err);
    });
};

export default Connection;
