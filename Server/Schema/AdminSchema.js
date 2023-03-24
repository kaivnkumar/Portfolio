import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    User: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export const AdminModel = new mongoose.model("Admin", AdminSchema);
