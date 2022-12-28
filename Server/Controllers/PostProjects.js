import { ProjectModel } from "../Schema/ProjectsSchema.js";

export const Projects = async (req, res) => {
    const project = new ProjectModel({
        Title: req.body.Title,
        Description: req.body.Description,
        Link: req.body.Link,
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
