require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const foodRoutes = require('./routes/foodRoutes');


//express app 
const app = express(); 

//middleware
app.use(express.json());


app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})

//routes


//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log('Server is running on port 4000');
        });
    })
    .catch((error)=>{
        console.log(error);
    })