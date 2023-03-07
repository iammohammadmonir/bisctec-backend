import SendEmail from './sendEmail.js';

const SendVerificationEmail = async ({
  name,
  email,
  subject,
  width,
  height,
  side,
  map,
  pnote,
  company,
  phone,
  street,
  zip,
  city,
  country,
  snote,
}) => {
  const message = `
      <p>Projekt-Titel: ${subject}</p>
      <p>Größe: widht ${width} x hight ${height}  ${
    width * height
  }m2, side ${side}  = &Sigma; ${height * width * side} m2 <p>
  <p>Aufstell-Ort: ${map}</p>
  <p>Besondere Hinweise: ${pnote}</p>
  <p>Name: ${name}</p>
  <p>Company: ${company}</p>
  <p>Phone: ${phone}</p>
  <p>Address: ${street}, ${zip}, ${city}, ${country}</p>
  <p>Freitext: ${snote}</p>
  `;
  return SendEmail({
    to: email,
    subject: subject,
    html: `${message}`,
  });
};

export default SendVerificationEmail;
