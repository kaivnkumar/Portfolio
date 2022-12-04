import express from "express";
import multer from "multer";
import { getPersonalData } from "../Controllers/GetPersonalData.js";
import { personalData } from "../Controllers/PersonalData.js";
import { AddImages } from "../Controllers/Images.js";
import { getImage } from "../Controllers/GetImage.js";
import { GradeAndCer } from "../Controllers/GradeAndCer.js";
import { getGradeAndCer } from "../Controllers/GetGradeAndCer.js";

const Route = express.Router();

const Storages = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "profile");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const Upload = multer({
    storage: Storages,
    limits: {
        fileSize: 90000000,
    },
});

const CerStorages = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "profile");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const GradeCerUpload = multer({
    storage: CerStorages,
    limits: {
        fileSize: 90000000,
    },
});

Route.post("/personalDetail", personalData);
Route.get("/getpersonalDetail", getPersonalData);
Route.post("/uploadImage", Upload.single("images"), AddImages);
Route.get("/getImage", getImage);
Route.post("/gradeandcer", GradeCerUpload.single("images"),GradeAndCer);
Route.get("/getgradeandcer", getGradeAndCer);

export default Route;
