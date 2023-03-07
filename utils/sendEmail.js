import nodemailer from 'nodemailer';
import NodeMailerConfig from './nodemailerConfig.js';

const SendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(NodeMailerConfig);

  return transporter.sendMail({
    from: 'monirh.me@gmail.com', // sender address
    to,
    subject,
    html,
  });
};

export default SendEmail;
