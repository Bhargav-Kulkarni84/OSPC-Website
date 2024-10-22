const express = require('express');
const router = express.Router();
const Event = require('../models/eventSchema');
const User = require('../models/userSchema');
const { appendFile } = require('fs');

router.get('/startpage',(req,res)=>{
    // res.send("Routing Is Working");
    // res.render('./user/home');
    res.render('./user/startpage');
})

router.get('/opensourceopportunites',(req,res)=>{
    res.render('./user/addingsoon');
})

router.get('/resources',(req,res)=>{
    res.render('./user/addingsoon');
})


router.get('/home',(req,res)=>{
    // res.send("Routing Is Working");
    res.render('./user/home');
})

router.get('/projects',(req,res)=>{
    res.render('./user/projects');
})

router.get('/home/ospc',(req,res)=>{
    // res.send("Routing Is Working");
    res.render('./user/about_ospc');
})

router.get('/home/events',async(req,res)=>{
    // res.send("Routing Is Working");
    const events = await Event.find({});
    res.render('./user/events',{events});
})

router.get('/register/:id',async(req,res)=>{
    const {id} = req.params;
    const event = await Event.findById(id);
    res.render('./user/register',{event});
})

router.post('/register/:id', async (req, res) => {
    const { Username, Email, Password } = req.body;
    const { id } = req.params;
    
    try {
        // Create new user
        const addUser = new User({ Username, Email, Password });

        // Find the event by ID
        const event = await Event.findById(id);
        
        // Decrease available seats
        if (event.Seats > 0) {
            event.Seats -= 1; // Reduce the seats count by 1
        } else {
            return res.status(400).send("No seats available for this event.");
        }

        // Link user to the event
        addUser.event = event._id; // Store event ID, not event object

        // Save the updated event and user
        await event.save(); // Don't forget to save the updated event
        await addUser.save();

        // Redirect back to events page
        res.redirect("/home/events");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});


module.exports = router