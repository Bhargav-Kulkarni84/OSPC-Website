const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the User schema
const userSchema = new Schema({
    // Username of the user (required)
    Username: {
        type: String,
        required: true,
    },

    // Email of the user (required)
    Email: {
        type: String,
        required: true,
    },
    
    // Password of the user (required)
    Password: {
        type: String,
        required: true,
    },

    // Array of events associated with the user
    Events: [{
        type: Schema.Types.ObjectId, // Reference to Event model
        ref: "Event",
    }],
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
