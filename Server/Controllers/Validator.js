import { AdminModel } from "../Schema/AdminSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Validate = async (req, res) => {
  const Password = req.body.Password;
  const data = await AdminModel.findOne({ User: "admin" });

  if (data) {
    const validatePassword = await bcrypt.compare(Password, data.Password);
    if (validatePassword) {
      const token = await tokenGeneratore("admin");
      res.cookie("jwt", token);
      return res.send({
        token: token,
        status: 200,
        message: "Success",
      });
    } else {
      return res.send({
        status: 404,
        message: "Incorrect",
      });
    }
  }
};

export const tokenGeneratore = (User) => {
  const token = jwt.sign(
    { User },
    process.env.JWT_KEY,
    { expiresIn: "10minutes" }
  )
  return token;
}

export const tokenValidator = async (token) => {
  const data = await jwt.verify(token, process.env.JWT_KEY);
  return data;
}

export const verify = async (req, res, next) => {
  try {
    const { jwt } = req.cookies;
    const valid = await tokenValidator(jwt);
    if (valid) {
      next();
    } else {
      res.send("Access Denied");
    }
  } catch (error) {
    res.send({ message: "Access Denied", error });
  }
}
