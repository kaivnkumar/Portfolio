import { personalDetailModel } from "../Schema/PersonalDetails.js";

export const PersonalData = async (req, res) => {
    const personalData = new personalDetailModel({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        DateOfBirth: req.body.DateOfBirth,
        Age: req.body.Age,
        City: req.body.City,
        Degree: req.body.Degree,
        Major: req.body.Major,
        Email: req.body.Email,
        PhoneNumber: req.body.PhoneNumber,
        IntroDescription: req.body.IntroDescription,
        InterDescription: req.body.InterDescription,
        ProjectDescription: req.body.ProjectDescription,
    });
    personalData.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "Details Added successfully",
        })
    });
}
