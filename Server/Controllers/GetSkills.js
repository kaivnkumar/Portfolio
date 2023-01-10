import { SkillModel } from "../Schema/SkillsSchema.js";

export const GetSkills = (req, res) => {
  SkillModel.find((err, data) => {
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
