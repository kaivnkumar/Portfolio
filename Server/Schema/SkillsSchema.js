import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    ProgramingLanguage: {
      type: String,
      required: false,
    },
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
    ProgramingLanguageImg: {
      type: String,
      required: false,
    },
    FrontEndImg: {
      type: String,
      required: false,
    },
    BackEndImg: {
      type: String,
      required: false,
    },
    DatabaseImg: {
      type: String,
      required: false,
    },
    SoftwareImg: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const SkillModel = new mongoose.model("TechnicalSkill", SkillSchema);
