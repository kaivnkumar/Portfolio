import { SkillModel } from "../Schema/SkillSchema.js";

export const SkillDetail = async (req, res) => {
    const skill = new SkillModel({
        Language: req.body.Language,
        Percentage: req.body.Percentage,
        FrontEndLanguage: req.body.FrontEndLanguage,
        BackEndLanguage: req.body.BackEndLanguage,
        Softwares: req.body.Softwares,
    });
    skill.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "Skills Added successfully",
        })
    });
}
