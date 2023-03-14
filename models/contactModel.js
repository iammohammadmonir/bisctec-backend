import mongoose from 'mongoose';
import validator from 'validator';

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide project name'],
      minlength: 3,
      maxlength: 100,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide project name'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email',
      },
    },
    phone: {
      type: String,
      required: [true, 'Please provide project name'],
      minlength: 3,
      maxlength: 30,
      trim: true,
    },
    company: {
      type: String,
      required: [true, 'Please provide project name'],
      minlength: 3,
      maxlength: 30,
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Please provide project name'],
      minlength: 30,
      maxlength: 500,
      trim: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model('Contact', ContactSchema);
