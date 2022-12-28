import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: true,
        },
        Description: {
            type: String,
            required: true,
        },
        Link: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const ProjectModel = new mongoose.model("Project", ProjectSchema);
