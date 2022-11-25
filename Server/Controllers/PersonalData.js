import { personalDetailModel } from "../Schema/PersonalDetails.js";

export const personalData = async (req, res) => {
    const personalData = new personalDetailModel({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email: req.body.Email,
        PhoneNumber: req.body.PhoneNumber,
    });
    personalData.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "Posted successfully",
            data: data
        })
    });
}
