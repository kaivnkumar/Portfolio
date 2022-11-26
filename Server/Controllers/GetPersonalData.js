import { personalDetailModel } from "../Schema/PersonalDetails.js";

export const getPersonalData = (req, res) => {
    personalDetailModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.send({
        status: 200,
        message: "events found",
        data: data,
      });
    }
  });
};
