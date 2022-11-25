import mongoose from "mongoose";

const personalDetailSchema = new mongoose.Schema(
  {
    Firstname: {
      type: String,
      required: true,
    },
    Lastname: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    PhoneNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const personalDetailModel = new mongoose.model("personalData", personalDetailSchema);
