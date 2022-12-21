import { contactInfoModel } from "../Schema/ContactSchema.js";

export const GetContactInfo = (req, res) => {
    contactInfoModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.send({
        status: 200,
        message: "Contact Informations found",
        data: data,
      });
    }
  });
};
