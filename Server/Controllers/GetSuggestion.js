import { suggestionsModel } from "../Schema/SuggestionSchema.js";

export const GetSuggestions = (req, res) => {
    suggestionsModel.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
            return res.send({
                status: 200,
                message: "Suggetions found",
                data: data,
            });
        }
    });
};
