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
        GitLink: {
            type: String,
            required: true,
        },
        ProjectPic: {
            data: Buffer,
            contentType: String
        },
    },
    { timestamps: true }
);

export const ProjectModel = new mongoose.model("Project", ProjectSchema);
