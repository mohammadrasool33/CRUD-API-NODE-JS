const express=require('express');
const app=express();
const mongoose = require('mongoose');
const router=require('./routes/productRoutes');
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('hello world');
});

app.use(router);

mongoose.connect("mongodb://localhost:27017")

    .then(()=>{
        console.log('connected');
    })
    .catch(err=>console.log(err));
app.listen(3000,()=>{
    console.log('server is running');
});