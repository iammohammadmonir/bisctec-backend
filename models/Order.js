import mongoose from 'mongoose';
import mongooseSeq from 'mongoose-sequence';
import validator from 'validator';
const autoIncrement = mongooseSeq(mongoose);

const OrderSchema = new mongoose.Schema(
  {
    _id: Number,
    projectTitle: {
      type: String,
      // required: [true, 'Please provide project name'],
      minlength: 3,
      maxlength: 100,
      trim: true,
    },
    name: {
      type: String,
      // required: [true, 'Please provide name'],
      minlength: 3,
      maxlength: 30,
      trim: true,
    },
    email: {
      type: String,
      // required: [true, 'Please provide email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email',
      },
    },
    phone: {
      type: String,
      // required: [true, 'Please provide phone'],
      minlength: 3,
      maxlength: 30,
      trim: true,
    },
    width: {
      type: Number,
      // required: [true, 'Please provide phone width'],
      trim: true,
    },
    height: {
      type: Number,
      // required: [true, 'Please provide phone height'],
      trim: true,
    },
    map: {
      type: String,
      // required: [true, 'Please provide map'],
      minlength: 3,
      maxlength: 30,
      trim: true,
    },
    photos: [
      {
        img: { type: String },
      },
    ],
    side: {
      type: String,
      // required: [true, 'Please provide side'],
      trim: true,
    },
    pnote: {
      type: String,
      // required: [false, 'Please provide project note'],
      trim: true,
    },
    snote: {
      type: String,
      // required: [false, 'Please provide special note'],
      trim: true,
    },
    company: {
      type: String,
      // required: [true, 'Please provide special note'],
      trim: true,
    },
    street: {
      type: String,
      // required: [true, 'Please provide special street'],
      trim: true,
    },
    zip: {
      type: String,
      // required: [true, 'Please provide special zip'],
      trim: true,
    },
    city: {
      type: String,
      // required: [true, 'Please provide special city'],
      trim: true,
    },
    country: {
      type: String,
      // required: [true, 'Please provide special country'],
      trim: true,
    },
  },
  { timestamps: true }
);
OrderSchema.plugin(autoIncrement);
export default mongoose.model('Order', OrderSchema);
