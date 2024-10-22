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

router.get('/home/events',(req,res)=>{
    // res.send("Routing Is Working");
    res.render('events');
})


module.exports = router;