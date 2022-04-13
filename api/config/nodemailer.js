const nodemailer = require("nodemailer");
const { ADMIN_API_GMAIL } = process.env;
const tempHTML = require("./mailTemplate");

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "hardwarehousep5@gmail.com",
      pass: ADMIN_API_GMAIL,
    },
  });
  return transport;
};

const sendMail = async (user) => {
  const transporter = createTrans();
  const info = await transporter.sendMail({
    from: "hardwarehousep5@gmail.com",
    to: `${user.email}`,
    subject: `Hola ${user.fullName}! Gracias por tu compra.`,
    html: tempHTML,
  });
  return;
};

exports.sendMail = (user) => sendMail(user);
