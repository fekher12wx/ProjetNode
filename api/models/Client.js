const mongoose =require('mongoose')

const clientSchema = new mongoose.Schema({
    name:String,
    email:{required:true,unique:true,type:String},
    password: { type: String, required: true },
    age:Number
    
})

module.exports = mongoose.model('Client', clientSchema)