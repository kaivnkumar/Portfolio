import { GradeAndCerModel } from "../Schema/GradeAndCer.js";
import fs from "fs";

export const GradeAndCer = async (req, res) => {
    const UploadingImage = new GradeAndCerModel({
        Score: req.body.Score,
        profilePic: {
            data: fs.readFileSync("profile/" + req.file.filename),
            contentType: "image/png",
        },
        GradeId : Math.floor(1000 + Math.random() * 9000)
    });
    UploadingImage.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "Data is added",
            data: data,
        });
    });
};
