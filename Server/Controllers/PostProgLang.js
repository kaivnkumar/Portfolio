import { ProgLangModel } from "../Schema/ProgLangSchema.js";

export const ProgLangs = async (req, res) => {
    const ProgLang = new ProgLangModel({
        Language: req.body.Language,
        Percentage: req.body.Percentage,
    });
    ProgLang.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "Programing Languages Added successfully",
        })
    });
}
