import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT

app.use(cors({ credentials: true, origin:"http://localhost:3000"}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}`);
  });