const express = require('express');
const app = express();
const homeRoutes = require('./routes/home');
const ejsMate = require('ejs-mate');
const path = require('path');

app.engine('ejs',ejsMate);
app.set('view engine','ejs'); // Will specify the view engine as ejs;
app.set('views',path.join(__dirname,'views')); //store value of current path + views in views;
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',homeRoutes);

app.listen(5000,()=>{
    console.log("Listening On Port 5000");
})