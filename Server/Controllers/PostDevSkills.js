import { DevSkillModel } from "../Schema/DevSkillsSchema.js";

export const DevSkills = async (req, res) => {
    const DevSkill = new DevSkillModel({
        FrontEnd: req.body.FrontEnd,
        BackEnd: req.body.BackEnd,
        Database: req.body.Database,
        Software: req.body.Software,
    });
    DevSkill.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "Development skills Added successfully",
        })
    });
}
