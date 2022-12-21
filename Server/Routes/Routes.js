import express from "express";
import multer from "multer";
import { GetPersonalData } from "../Controllers/GetPersonalData.js";
import { PersonalData } from "../Controllers/PostPersonalData.js";
import { AddImages } from "../Controllers/Images.js";
import { GetImage } from "../Controllers/GetImage.js";
import { PostSchoolInfo } from "../Controllers/PostSchoolInfo.js";
import { GetSchoolInfo } from "../Controllers/GetSchoolInfo.js";
import { GetMarksheetById } from "../Controllers/GetMarksheetById.js";
import { ContactInfo } from "../Controllers/PostContactInfo.js";
import { GetContactInfo } from "../Controllers/GetContactInfo.js";
import { Suggestions } from "../Controllers/PostSuggestion.js";

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

const MarksheetUpload = multer({
    storage: CerStorages,
    limits: {
        fileSize: 90000000,
    },
});

Route.post("/personalDetail", PersonalData);
Route.get("/getpersonalDetail", GetPersonalData);
Route.post("/uploadimage", Upload.single("images"), AddImages);
Route.get("/getimage", GetImage);
Route.post("/postschoolinfo", MarksheetUpload.single("marksheet"), PostSchoolInfo);
Route.get("/getschoolinfo", GetSchoolInfo);
Route.get("/getmarksheet", GetMarksheetById);
Route.post("/contactinfo", ContactInfo);
Route.get("/getcontactinfo", GetContactInfo);
Route.post("/postsuggestion", Suggestions);


export default Route;
