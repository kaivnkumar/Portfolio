import { contactInfoModel } from "../Schema/ContactSchema.js";

export const ContactInfo = async (req, res) => {
    const contactInfo = new contactInfoModel({
        Linkedin: req.body.Linkedin,
        Twitter: req.body.Twitter,
        Instagram: req.body.Instagram,
        FaceBook: req.body.FaceBook,
        WhatsAppNumber: req.body.WhatsAppNumber,
        MobileNumber: req.body.MobileNumber,
        Email: req.body.Email,
        WAPredefinedText: req.body.WAPredefinedText,
    });
    contactInfo.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "Contact Info Added successfully",
        })
    });
}
