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

// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cors({ credentials: true, origin:"https://kavinkumar.vercel.app"}));

app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

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
      console.log("Database Connected Successfully");
    } else {
      console.log("error", err);
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
