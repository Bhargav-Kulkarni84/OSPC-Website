const express = require('express');
const router = express.Router();
const Event = require('../models/eventSchema');

router.get('/events',async(req,res)=>{
    const events = await Event.find({});
    res.render('./events/index',{events});
})
router.get('/addevent',(req,res)=>{
    res.render('./events/new');
})

router.post('/addevent',async(req,res)=>{
    const {Title,Image,Date,Seats,Timing} = req.body;
    const newEvent = new Event({
        Title,
        Image,
        Date,
        Seats,
        Timing    
    })
    await newEvent.save();
    res.redirect('/admin/events')
})

router.get('/event/:id',async(req,res)=>{
    const {id} = req.params;
    const event = await Event.findById(id);
    res.render('./events/show',{event});
})

router.get('/editevent/:id',async(req,res)=>{
    const {id} = req.params;
    const event = await Event.findById(id);
    res.render('./events/edit',{event});
})

router.put('/editevent/:id',async(req,res)=>{
    const {id} = req.params;
    await Event.findByIdAndUpdate(id,req.body);
    res.redirect(`/admin/event/${id}`);
}) 

router.delete('/deleteevent/:id',async(req,res)=>{
    const {id} = req.params;
    await Event.findByIdAndDelete(id);
    res.redirect(`/admin/events`);
})


module.exports = router;