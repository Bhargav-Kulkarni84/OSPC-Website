const mongoose = require('mongoose');
const {Schema} = mongoose;

const eventSchema = new Schema({
    Title:{
        type:String,
        require:true
    },
    Image:{
        type:String,
    },
    Date:{
        type:Date,
        require:true
    },
    Seats:{
        type:Number,
        require:true
    },
    Timing:{
        type:String,
        require:true
    },
    Start:{
        type:String,
        require:true
    },
    End:{
        type:String,
        require:true
    },
    Registred:{
        type:Boolean,
        required:true
    }
})

const event = mongoose.model('Event',eventSchema);

module.exports = event;