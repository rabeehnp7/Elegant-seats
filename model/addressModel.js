const mongoose = require('mongoose');

// Define the schema for the Order
const addressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name:{
        type:String,
        required:true
    },
    pincode: {
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    locality:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    alternativePhoneNumber:{
        type:Number,
    },
    address:{
        type:String,
        required:true
    },
    defaultAddress:{
        type:Boolean,
        default:false
    },
    softDeleted:{
        type:Boolean,
        default:false
    },
    landMark:{
        type:String
    }
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
