import { GradeAndCerModel } from "../Schema/GradeAndCer.js";

export const getGradeAndCer = (req, res) => {
    GradeAndCerModel.find((err, data) => {
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
