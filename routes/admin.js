const express = require('express');
const router = express.Router();
const Event = require('../models/eventSchema');

// Get all events
router.get('/events', async (req, res) => {
    const events = await Event.find({});
    res.render('./admin/events/index', { events });
});

// Render the form to add a new event
router.get('/addevent', (req, res) => {
    res.render('./admin/events/new');
});

// Handle the creation of a new event
router.post('/addevent', async (req, res) => {
    const { Title, Image, Date, Seats, Timing } = req.body;
    const newEvent = new Event({
        Title,
        Image,
        Date,
        Seats,
        Timing    
    });
    await newEvent.save();
    res.redirect('/admin/events');
});

// Get details of a specific event
router.get('/event/:id', async (req, res) => {
    const { id } = req.params;
    const event = await Event.findById(id);
    res.render('./admin/events/show', { event });
});

// Render the form to edit an existing event
router.get('/editevent/:id', async (req, res) => {
    const { id } = req.params;
    const event = await Event.findById(id);
    res.render('./admin/events/edit', { event });
});

// Handle updating an existing event
router.put('/editevent/:id', async (req, res) => {
    const { id } = req.params;
    await Event.findByIdAndUpdate(id, req.body);
    res.redirect(`/admin/event/${id}`);
});

// Handle the deletion of an event
router.delete('/deleteevent/:id', async (req, res) => {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.redirect('/admin/events');
});

// Export the router
module.exports = router;
