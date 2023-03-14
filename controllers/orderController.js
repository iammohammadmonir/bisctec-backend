import nodemailer from 'nodemailer';

const newOrder = async (req, res) => {
  const {
    product,
    email,
    name,
    phone,
    width,
    height,
    side,
    pnote,
    snote,
    company,
    street,
    zip,
    city,
    country,
  } = req.body;
  const myEmail = `info@bisctec.com, ${email}`;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: myEmail,
      subject: 'Inquiry Form',
      html: `
        ${product},
        ${name},
        ${phone},
        ${width},
        ${height},
        ${side},
        ${pnote},
        ${snote},
        ${company},
        ${street},
        ${zip},
        ${city},
        ${country},
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error' + error);
      } else {
        console.log('Email sent:' + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    console.log('Error' + error);
    res.status(401).json({ status: 401, error });
  }
};

export default newOrder;
