import { CertificateModel } from "../Schema/CertificateSchema.js";

export const GetCertificate = (req, res) => {
  CertificateModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.send({
        status: 200,
        message: "Certificate found",
        data: data,
      });
    }
  });
};
