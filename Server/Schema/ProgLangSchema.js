import mongoose from "mongoose";

const ProgLangSchema = new mongoose.Schema(
  {
    Language: {
      type: String,
      required: true,
    },
    Percentage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ProgLangModel = new mongoose.model("ProgramingLanguage", ProgLangSchema);
