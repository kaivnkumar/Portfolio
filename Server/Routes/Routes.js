import express from "express";
import multer from "multer";
import { getPersonalData } from "../Controllers/GetPersonalData.js";
import { personalData } from "../Controllers/PersonalData.js";
import { AddImages } from "../Controllers/Images.js";

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

Route.post("/personalDetail", personalData);
Route.get("/getpersonalDetail", getPersonalData);
Route.post("/uploadImage", Upload.single("images"), AddImages);

export default Route;
