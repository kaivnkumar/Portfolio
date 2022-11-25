import express from "express";
import { personalData } from "../Controllers/PersonalData.js";

const Route = express.Router();

Route.post("/personalDetail", personalData);

export default Route;