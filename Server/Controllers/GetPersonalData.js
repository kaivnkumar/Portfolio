import { personalDetailModel } from "../Schema/PersonalDetails.js";

export const GetPersonalData = (req, res) => {
    personalDetailModel.find((err, data) => {
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
