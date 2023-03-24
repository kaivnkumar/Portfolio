import { CollegeInfoModel } from "../Schema/CollegeSchema.js";

export const CollegeData = async (req, res) => {
    const collegeData = new CollegeInfoModel({
        College: req.body.College,
        Year: req.body.Year,
        Cgpa: req.body.Cgpa,
        Sgpa1: req.body.Sgpa1,
        Sgpa2: req.body.Sgpa2,
        Sgpa3: req.body.Sgpa3,
        Sgpa4: req.body.Sgpa4,
        Sgpa5: req.body.Sgpa5,
        Sgpa6: req.body.Sgpa6,
        Sgpa7: req.body.Sgpa7,
        Sgpa8: req.body.Sgpa8,
    });
    collegeData.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "College Added successfully",
        })
    });
}
