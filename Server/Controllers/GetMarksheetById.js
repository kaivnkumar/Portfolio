import { SchoolInfoModel } from "../Schema/SchoolInfoSchema.js";

export const GetMarksheetById = (req, res) => {
  SchoolInfoModel.find({ MarksheetId: req.query.MarksheetId }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length) {
        return res.send({
          status: 200,
          message: "Marksheet found",
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
