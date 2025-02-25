const professionalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    specialty: { type: String, required: true }, 
    availability: [{ type: Date }],
    createdAt: { type: Date, default: Date.now }
  });
  module.exports = mongoose.model('professional', professionalSchema)