const usersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'professional', 'client'], default: 'client' },
    createdAt: { type: Date, default: Date.now }
  });
  
module.exports = mongoose.model('Users', usersSchema)