//Dependecies
const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//Routes
const homeRoutes = require('./routes/home');
const adminRoutes = require('./routes/admin');

app.engine('ejs',ejsMate);
app.set('view engine','ejs'); // Will specify the view engine as ejs;
app.set('views',path.join(__dirname,'views')); //store value of current path + views in views;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/',homeRoutes);
app.use('/admin',adminRoutes);

//Mongo-DB Connection 

mongoose.connect('mongodb://localhost:27017/OSPC')
.then(()=>{
    console.log("DataBase Connection Successful");
})
.catch((e)=>{
    console.log("DataBase Connection Error");
    console.log(e)
})

app.listen(5000,()=>{
    console.log("Listening On Port 5000");
})