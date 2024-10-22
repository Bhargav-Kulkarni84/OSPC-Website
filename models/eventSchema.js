const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Event schema
const eventSchema = new Schema({
    // Title of the event (required)
    Title: {
        type: String,
        required: true, // Fixed the typo 'require' to 'required'
    },
    // URL of the event image
    Image: {
        type: String,
    },
    // Date of the event (required)
    Date: {
        type: Date,
        required: true,
    },
    // Total number of seats available (required)
    Seats: {
        type: Number,
        required: true,
    },
    // Timing of the event (required)
    Timing: {
        type: String,
        required: true,
    },
    // Start time of the event (required)
    Start: {
        type: String,
        required: true,
    },
    // End time of the event (required)
    End: {
        type: String,
        required: true,
    },
    // Registration status (required)
    Registred: {
        type: Boolean,
        required: true,
    },
});

// Create the Event model
const Event = mongoose.model('Event', eventSchema);

// Export the Event model
module.exports = Event;
