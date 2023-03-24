import mongoose from "mongoose";

const CollegeInfoSchema = new mongoose.Schema(
    {
        College: {
            type: String,
            required: true,
        },
        Year: {
            type: String,
            required: true,
        },
        Cgpa: {
            type: String,
            required: true,
        },
        Sgpa1: {
            type: String,
            required: false,
        },
        Sgpa2: {
            type: String,
            required: false,
        },
        Sgpa3: {
            type: String,
            required: false,
        },
        Sgpa4: {
            type: String,
            required: false,
        },
        Sgpa5: {
            type: String,
            required: false,
        },
        Sgpa6: {
            type: String,
            required: false,
        },
        Sgpa7: {
            type: String,
            required: false,
        },
        Sgpa8: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

export const CollegeInfoModel = new mongoose.model("CollegeDetail", CollegeInfoSchema);
