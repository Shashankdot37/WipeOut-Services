import mongoose from "mongoose";

const CleaningQuoteSchema = new mongoose.Schema({
    name:{
        type:String
    },
  serviceType: {
    type: String,
    required: true,
    enum: ["general-cleaning", "end-of-lease-cleaning", "office-cleaning", "deep-cleaning", "regular-cleaning", "construction-cleaning", "commercial-cleaning", "carpet-cleaning", "apartment-cleaning", "restaurant-cleaning"],
  },
  location: {
    type: String,
    required: true,
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
  bedrooms: {
    type: Number,
    min: 1,
  },
  bathrooms: {
    type: Number,
    min: 1,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String
  },
  status: { type: String, enum: ["pending", "done"], default: "pending" },
});

const CleaningQuote = mongoose.models.CleaningQuote || mongoose.model("CleaningQuote", CleaningQuoteSchema);
export default CleaningQuote;
