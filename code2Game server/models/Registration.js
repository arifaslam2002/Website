// models/Registration.js
import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  FullName: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: String, required: true },
  Course: { type: String, required: true },
  Message: { type: String, required: true },
});

const Registration = mongoose.model('Registration', registrationSchema);
export default Registration;
