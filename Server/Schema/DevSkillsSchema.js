import mongoose from "mongoose";

const DevSkillSchema = new mongoose.Schema(
  {
    FrontEnd: {
      type: String,
      required: false,
    },
    BackEnd: {
      type: String,
      required: false,
    },
    Database: {
      type: String,
      required: false,
    },
    Software: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const DevSkillModel = new mongoose.model("DevelopmentLanguage", DevSkillSchema);
