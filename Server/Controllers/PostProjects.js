import { ProjectModel } from "../Schema/ProjectsSchema.js";
import fs from "fs";

export const Projects = async (req, res) => {
    const project = new ProjectModel({
        Title: req.body.Title,
        Description: req.body.Description,
        GitLink: req.body.GitLink,
        ProjectPic: {
            data: fs.readFileSync("Image/" + req.file.filename),
            contentType: "image/png",
        },
    });
    project.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "Projects Added successfully",
        })
    });
}
