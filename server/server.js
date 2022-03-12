const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


// CORS Policy
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET','POST','PUT','DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});

//Routes
app.use('/auth' , require('./Routes/auth'));
app.use('/routes', require('./Routes/routes'));

//MongoDB Atlas connection
mongoose.connect("mongodb+srv://priyanka:priyanka@cluster0.rutr8.mongodb.net/finalProject?retryWrites=true&w=majority");

//Port 
app.listen(5000,()=>{
    console.log('server is running on port 5000')
})