import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: { 
      type: String, required: true },
    email: {
       type: String, required: true, unique: true },
    password: { 
      type: String, required: true },
    role: { 
      type: String, enum: ['admin', 'professional', 'client'], default: 'client' },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Users', usersSchema);
