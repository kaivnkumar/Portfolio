import express from "express";
import { getPersonalData } from "../Controllers/GetPersonalData.js";
import { personalData } from "../Controllers/PersonalData.js";

const Route = express.Router();

Route.post("/personalDetail", personalData);
Route.get("/getpersonalDetail", getPersonalData);

export default Route;