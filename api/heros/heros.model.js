var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var herosSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : false,
        default: "Anónimo"

    },
    date: { 
        type: Date, 
        default: Date.now, 
        required : false
    },
    
}, {
    timestamps: true
});

module.exports = herosSchema;