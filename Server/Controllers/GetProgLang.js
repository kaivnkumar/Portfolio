import { ProgLangModel } from "../Schema/ProgLangSchema.js";

export const GetProgLang = (req, res) => {
  ProgLangModel.find((err, data) => {
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
