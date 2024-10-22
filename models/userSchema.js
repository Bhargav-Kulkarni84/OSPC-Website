const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({

    Username:{
        type:String,
        required:true
    },

    Email:{
        type:String,
        required:true
    },
    
    Password:{
        type:String,
        required:true
    },

    Events:[{
        type: Schema.Types.ObjectId,
        ref:"Event"
    }]

})

const User = mongoose.model('User',userSchema);

module.exports = User;