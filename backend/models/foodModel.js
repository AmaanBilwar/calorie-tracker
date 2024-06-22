const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const foodSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    calories:{
        type: String,
        required:true
    },
    type: {
        type: String,
        required: true
    }}
    , {timestamps:true});


    


module.exports = mongoose.model('Food', foodSchema);