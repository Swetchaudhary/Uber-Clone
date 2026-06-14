const express=require("express");
const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors');
const cookieParser=require("cookie-parser")
const userRoutes=require('./routes/user.routes')
const captainRoutes=require('./routes/captian.routes')
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes')





const connectedToDb=require('./db/db')
connectedToDb();


const app=express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());






 app.get('/',(req,res)=>{
    res.send('welcome');
})

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);
app.use('/maps',mapsRoutes);
app.use('/rides',rideRoutes);

module.exports=app;