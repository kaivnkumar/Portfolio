import { GradeAndCerModel } from "../Schema/GradeAndCer.js";

export const GetCertificate = (req, res) => {
  GradeAndCerModel.find({ GradeId: req.query.GradeId }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length) {
        return res.send({
          status: 200,
          message: "Certificate found",
          data: data,
        });
      } else {
        return res.send({
          status: 404,
          message: "Id not fount",
        });
      }
    }
  });
};
