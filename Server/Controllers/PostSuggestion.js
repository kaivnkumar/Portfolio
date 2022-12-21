import { suggestionsModel } from "../Schema/SuggestionSchema.js";

export const Suggestions = async (req, res) => {
    const suggestions = new suggestionsModel({
        Name: req.body.Name,
        MobileNumber: req.body.MobileNumber,
        Email: req.body.Email,
        Suggestions: req.body.Suggestions,
    });
    suggestions.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "Suggestions Added successfully",
            response: "success",
        })
    });
}
