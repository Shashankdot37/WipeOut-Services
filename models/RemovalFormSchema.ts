import mongoose from "mongoose";

const RemovalFormSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
    enum: ["furniture-removal", "house-moving", "office-relocation"],
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // 10-digit phone number validation
  },
  email: {
    type: String,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email validation
  },
  date: {
    type: Date,
    required: true,
  },
  status: { type: String, enum: ["pending", "done"], default: "pending" },
});

const RemovalForm = mongoose.models.RemovalForm || mongoose.model("RemovalForm", RemovalFormSchema);
export default RemovalForm;