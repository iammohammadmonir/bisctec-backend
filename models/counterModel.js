import mongoose from 'mongoose';

const CounterSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Counter', CounterSchema);
