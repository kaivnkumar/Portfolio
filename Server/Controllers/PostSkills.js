import { SkillModel } from "../Schema/SkillsSchema.js";

export const Skills = async (req, res) => {
    const skill = new SkillModel({
        ProgramingLanguage: req.body.ProgramingLanguage,
        ProgramingLanguageImg: req.body.ProgramingLanguageImg,
        FrontEnd: req.body.FrontEnd,
        FrontEndImg: req.body.FrontEndImg,
        BackEnd: req.body.BackEnd,
        BackEndImg: req.body.BackEndImg,
        Database: req.body.Database,
        DatabaseImg: req.body.DatabaseImg,
        Software: req.body.Software,
        SoftwareImg: req.body.SoftwareImg,
    });
    skill.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "Development skills Added successfully",
        })
    });
}
