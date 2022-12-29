import { CollegeInfoModel } from "../Schema/CollegeSchema.js";

export const GetCollegeData = (req, res) => {
  CollegeInfoModel.find((err, data) => {
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
