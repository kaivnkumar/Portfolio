import { ImgSchema } from "../Schema/ImageSchema.js";

export const getImage = (req, res) => {
    ImgSchema.find((err, data) => {
        if (err) {
            res.send({
                status: 400,
                message: "Image cannot be retrived",
            })
        }
        else {
            return res.send({
                status: 200,
                message: "Image retrived",
                data: data
            })
        }
    })
}
