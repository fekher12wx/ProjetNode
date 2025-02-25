const mongoose =require('mongoose')

const adminSchema = new mongoose.Schema({
    name:String,
    email:{required:true,unique:true,type:String},
    password: { type: String, required: true },
    age:Number
})

module.exports = mongoose.model('Admin', adminSchema)