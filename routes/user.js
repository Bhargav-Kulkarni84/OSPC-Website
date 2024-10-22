const express = require('express');
const router = express.Router();
const Event = require('../models/eventSchema');
const User = require('../models/userSchema');

// Render the start page
router.get('/', (req, res) => {
    res.render('./user/startpage');
});

// Render the "Coming Soon" page for open-source opportunities
router.get('/opensourceopportunites', (req, res) => {
    res.render('./user/addingsoon');
});

// Render the "Coming Soon" page for resources
router.get('/resources', (req, res) => {
    res.render('./user/addingsoon');
});

// Render the home page
// router.get('/home', (req, res) => {
//     res.render('./user/home');
// });

// Render the projects page
router.get('/projects', (req, res) => {
    res.render('./user/projects');
});

// Render the About OSPC page
router.get('/home', (req, res) => {
    res.render('./user/about_ospc');
});

// Render the events page with all events
router.get('/home/events', async (req, res) => {
    const events = await Event.find({});
    res.render('./user/events', { events });
});

router.get('/event/:id', async (req, res) => {
    res.render('./user/addingsoon');
});

// Render the registration page for a specific event
router.get('/register/:id', async (req, res) => {
    const { id } = req.params;
    const event = await Event.findById(id);
    res.render('./user/register', { event });
});

// Handle registration for an event
router.post('/register/:id', async (req, res) => {
    const { Username, Email, Password } = req.body;
    const { id } = req.params;

    try {
        // Create a new user
        const addUser = new User({ Username, Email, Password });

        // Find the event by ID
        const event = await Event.findById(id);

        // Decrease available seats if possible
        if (event.Seats > 0) {
            event.Seats -= 1; // Reduce the seats count by 1
        } else {
            return res.status(400).send("No seats available for this event.");
        }

        // Link the user to the event
        addUser.Events.push(event._id); // Store event ID in the user's Events array

        // Save the updated event and user
        await event.save(); // Save the updated event
        await addUser.save(); // Save the new user

        // Redirect back to events page
        res.redirect("/home/events");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// Export the router
module.exports = router;
