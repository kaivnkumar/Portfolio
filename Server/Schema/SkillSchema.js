import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    Language: {
      type: String,
      required: false,
    },
    Percentage: {
      type: String,
      required: false,
    },
    FrontEndLanguage: {
        type: String,
        required: false,
    },
    BackEndLanguage: {
        type: String,
        required: false,
    },
    DataBase: {
        type: String,
        required: false,
    },    
    Softwares: {
        type: String,
        required: false,
    },    
  },
  { timestamps: true }
);

export const SkillModel = new mongoose.model("skill", SkillSchema);
