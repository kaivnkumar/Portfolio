import mongoose from "mongoose";

const personalDetailSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    DateOfBirth: {
      type: String,
      required: true,
    },
    Age: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    }, 
    Degree: {
      type: String,
      required: true,
    },
    Major: {
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
    IntroDescription: {
      type: String,
      required: true,
    },
    InterDescription: {
      type: String,
      required: true,
    },
    ProjectDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const personalDetailModel = new mongoose.model("personalData", personalDetailSchema);
