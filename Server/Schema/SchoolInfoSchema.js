import mongoose from "mongoose";

const SchoolInfoSchema = new mongoose.Schema(
  {
    School: {
      type: String,
      required: true,
    },
    Year: {
      type: String,
      required: true,
    },
    MarksheetType: {
      type: String,
      required: true,
    },
    Percentage: {
      type: String,
      required: true,
    },
    Marksheet: {
      data: Buffer,
      contentType: String
    },
    MarksheetId: {
      type : String,
    }
  },
  { timestamps: true }
);

export const SchoolInfoModel = new mongoose.model("SchoolAndPercentage", SchoolInfoSchema);
