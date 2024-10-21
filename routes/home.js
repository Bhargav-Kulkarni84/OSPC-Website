const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
    // res.send("Routing Is Working");
    res.render('home');
})

router.get('/home/ospc',(req,res)=>{
    // res.send("Routing Is Working");
    res.render('about_ospc');
})
module.exports = router;