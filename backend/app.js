const express=require("express");
const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors');
const userRoutes=require('./routes/user.routes')
const connectedToDb=require('./db/db')
connectedToDb();

const app=express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));






 app.get('/',(req,res)=>{
    res.send('welcome');
})

app.use('/users',userRoutes);

module.exports=app;