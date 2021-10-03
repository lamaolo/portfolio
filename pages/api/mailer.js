const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const { EMAIL, PASSWORD } = process.env;

  const { name, subject, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  });

  if (!name || !subject || !email || !message) {
    return res
      .status(401)
      .send(
        "Los campos `name`, `subject`, `email` y `message` son obligatorios."
      );
  }

  try {
    const info = await transporter.sendMail({
      from: `Portafolio | ${name} <${email}>`,
      to: "lamaolo.m@gmail.com",
      subject: `PORTAFOLIO: ${subject}`,
      text: message,
      html: `<div>${message}</div>`,
    });

    return res.status(200).send("Mensaje enviado: ", info);
  } catch (error) {
    return res.status(500).send(error);
  }
}
