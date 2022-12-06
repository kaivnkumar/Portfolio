import { SchoolInfoModel } from "../Schema/SchoolInfoSchema.js";
import fs from "fs";

export const PostSchoolInfo = async (req, res) => {
    const UploadingImage = new SchoolInfoModel({
        School: req.body.School,
        Year: req.body.Year,
        MarksheetType: req.body.CertificateType,
        Percentage: req.body.Percentage,
        Marksheet: {
            data: fs.readFileSync("profile/" + req.file.filename),
            contentType: "image/png",
        },
        MarksheetId : Math.floor(1000 + Math.random() * 9000)
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
