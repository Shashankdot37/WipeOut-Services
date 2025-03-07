import mongoose from "mongoose";

const CleaningFormSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
    enum: ["general-cleaning", "deep-cleaning", "carpet-cleaning"],
  },
  location: {
    type: String,
    required: true,
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
    type: String, // 24-hour format (HH:mm)
  },
});

const CleaningForm = mongoose.models.CleaningForm || mongoose.model("CleaningForm", CleaningFormSchema);
export default CleaningForm;
