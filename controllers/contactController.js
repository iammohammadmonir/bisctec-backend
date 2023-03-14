import nodemailer from 'nodemailer';
const newContact = async (req, res) => {
  const { name, email, phone, company, message } = req.body;
  const myEmail = `infoo@bisctec.com, ${email}`;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'monirh.me@gmail.com',
        pass: 'vwfakghtygwmgaew',
      },
    });
    const mailOptions = {
      from: 'monirh.me@gmail.com',
      to: myEmail,
      subject: 'Sending Email With React And Nodejs',
      html: `<h1>${name}, ${phone}, ${company}, ${message}</h1> <h1> You successfully sent Email </h2>`,
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

export default newContact;
