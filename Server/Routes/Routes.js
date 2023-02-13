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
import { CollegeData } from "../Controllers/PostCollegeInfo.js";
import { GetCollegeData } from "../Controllers/GetCollegeInfo.js";
import { Skills } from "../Controllers/PostSkills.js";
import { GetSkills } from "../Controllers/GetSkills.js";
import { Projects } from "../Controllers/PostProjects.js";
import { GetProjects } from "../Controllers/GetProjects.js";

const Route = express.Router();

const profile = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "Image");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const Upload = multer({
    storage: profile,
    limits: {
        fileSize: 90000000,
    },
});


const CerStorages = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "Image");
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


const Project = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "Image");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const ProjectPic = multer({
    storage: Project,
    limits: {
        fileSize: 90000000,
    },
});


Route.post("/personaldetail", PersonalData);
Route.get("/getpersonaldetail", GetPersonalData);
Route.post("/uploadimage", Upload.single("images"), AddImages);
Route.get("/getimage", GetImage);
Route.post("/postschoolinfo", MarksheetUpload.single("marksheet"), PostSchoolInfo);
Route.get("/getschoolinfo", GetSchoolInfo);
Route.get("/getmarksheet", GetMarksheetById);
Route.post("/contactinfo", ContactInfo);
Route.get("/getcontactinfo", GetContactInfo);
Route.post("/postsuggestion", Suggestions);
Route.post("/postcollegeinfo", CollegeData);
Route.get("/collegeinfo", GetCollegeData);
Route.post("/postskill", Skills);
Route.get("/getskill", GetSkills);
Route.post("/postprojects", ProjectPic.single("ProjectImage"), Projects);
Route.get("/getprojects", GetProjects);

export default Route;
