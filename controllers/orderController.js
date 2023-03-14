import nodemailer from 'nodemailer';

const newOrder = async (req, res) => {
  const { product, email } = req.body;
  const myEmail = `infoo@bisctec.com, ${email}`;
  const attachments = [];
  for (let i = 0; i < req.files.length; i++) {
    let fileDetails = {
      filename: req.files[i].filename,
      path: req.files[i].path,
    };
    attachments.push(fileDetails);
  }
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
      html: `<h1>${product}</h1> <h1> You successfully sent Email </h2>`,
      attachments: attachments,
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
