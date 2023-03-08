import { CertificateModel } from "../Schema/CertificateSchema.js";
import fs from "fs";

export const PostCertificate = async (req, res) => {
    const Certificate = new CertificateModel({
        Title: req.body.Title,
        Description: req.body.Description,
        CertificateImage: {
            data: fs.readFileSync("Image/" + req.file.filename),
            contentType: "image/png",
        },
        CertificateId: Math.floor(1000 + Math.random() * 9000)
    });
    Certificate.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "Certificate added",
        });
    });
};
