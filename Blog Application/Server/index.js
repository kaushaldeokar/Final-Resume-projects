import express from 'express';
import Connection from './DataBase/db.js';
import {AuthRouter,UploadRouter,CreateRouter,PostRouter} from './Routes/Route.js';

import cors from 'cors';
import emailValidator from 'email-validator'
import cookieParser from 'cookie-parser';

const app=express();
app.use(cookieParser())
app.use(express.json());//yeh entry point pr likhte h jaha se request aati h
app.use(cors());

app.use('/auth',AuthRouter);
app.use('/file',UploadRouter);
app.use('/',CreateRouter);
app.use('/',PostRouter);

app.get('/',(req,res)=>{
    res.send('hi we are live');
});

app.listen(8000,()=>{
    console.log("Listening at post : 8000");
})


Connection();



