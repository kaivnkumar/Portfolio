import { AdminModel } from "../Schema/AdminSchema.js";
import bcrypt from 'bcrypt';

export const PostAdminData = async (req, res) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.Password, saltRounds);
    const User = new AdminModel({
        User: req.body.User,
        Password: hashedPassword,
    });
    User.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "User added",
        });
    });
};
