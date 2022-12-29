import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    Linkedin: {
      type: String,
      required: true,
    },
    Twitter: {
      type: String,
      required: true,
    },
    Instagram: {
      type: String,
      required: true,
    },
    FaceBook: {
      type: String,
      required: true,
    },
    WhatsAppNumber: {
      type: String,
      required: true,
    },
    MobileNumber: {
      type: Number,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    WAPredefinedText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const contactInfoModel = new mongoose.model("contactInfo", contactSchema);
