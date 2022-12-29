import { DevSkillModel } from "../Schema/DevSkillsSchema.js";

export const GetDevSkills = (req, res) => {
  DevSkillModel.find((err, data) => {
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
