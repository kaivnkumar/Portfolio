import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";  
import * as dotenv from 'dotenv';
import { mongoUrl } from "./Config/config.js";
import routes from "./Routes/Routes.js";

dotenv.config();

const app = Express();

const PORT = process.env.PORT;

// app.use(cors({ credentials: true, origin:"http://localhost:3000"}));
app.use(cors({ credentials: true, origin:"https://kavinkumar.vercel.app"}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedtopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Database Connected");
    } else {
      console.log("error", err);
    }
  }
);

app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}`);
  });
