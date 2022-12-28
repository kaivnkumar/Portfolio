import { ProjectModel } from "../Schema/ProjectsSchema.js";

export const GetProjects = (req, res) => {
    ProjectModel.find((err, data) => {
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
