import mongoose from "mongoose";

const SuggestionSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        MobileNumber: {
            type: String,
            required: false,
        },
        Email: {
            type: String,
            required: false,
        },
        Suggestions: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const suggestionsModel = new mongoose.model("suggestion", SuggestionSchema);
