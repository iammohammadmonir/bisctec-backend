import SendEmail from './sendEmail.js';

const SendContactEmail = async ({ name, email, phone, message, company }) => {
  return SendEmail({
    to: email,
    subject: 'Message from bisctec contact form',
    html: `<div>
        <span>${name}, ${phone}, ${company}</span>
        <span>${message}<span>
    </div>`,
  });
};

export default SendContactEmail;
