import { SchoolInfoModel } from "../Schema/SchoolInfoSchema.js";

export const GetSchoolInfo = (req, res) => {
  SchoolInfoModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.send({
        status: 200,
        message: "Data found",
        data: data,
      });
    }
  });
};
