import mongoose from 'mongoose';

const confirmeSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    professional: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Confirme', confirmeSchema);
