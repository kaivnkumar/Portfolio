import mongoose from "mongoose";

const GradeAndCerSchema = new mongoose.Schema(
  {
    Score: {
      type: String,
      required: true,
    },
    profilePic: {
      data: Buffer,
      contentType: String
    },
  },
  { timestamps: true }
);

export const GradeAndCerModel = new mongoose.model("GradeAndCertificate", GradeAndCerSchema);
