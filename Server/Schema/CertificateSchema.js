import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    CertificateImage: {
        data: Buffer,
        contentType: String
    },
    CertificateId: {
        type: String,
      }
  },
  { timestamps: true }
);

export const CertificateModel = new mongoose.model("Certificate", CertificateSchema);
