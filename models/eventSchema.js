const mongoose = require('mongoose');
const {Schema} = mongoose;

const eventSchema = new Schema({
    Title:{
        type:String,
        require:true
    },
    Image:{
        type:String,
        require:true
    },
    Date:{
        type:String,
        require:true
    },
    Seats:{
        type:Number,
        require:true
    },
    Timing:{
        type:String,
        require:true
    }
})

const event = mongoose.model('Event',eventSchema);

module.exports = event;