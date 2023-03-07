import Order from '../models/Order.js';
import { StatusCodes } from 'http-status-codes';
import SendVerificationEmail from '../utils/sendVerficationEmail.js';

const addNewOrder = async (req, res) => {
  const {
    projectTitle,
    width,
    height,
    side,
    map,
    pnote,
    name,
    company,
    email,
    phone,
    street,
    zip,
    city,
    country,
    snote,
  } = req.body;
  const myEmail = `info@bisctec.com, ${email}`;
  const order = await Order.create({
    projectTitle,
    width,
    height,
    side,
    map,
    pnote,
    name,
    company,
    email,
    phone,
    street,
    zip,
    city,
    country,
    snote,
  });

  await SendVerificationEmail({
    email: myEmail,
    subject: projectTitle,
    width,
    height,
    side,
    map,
    pnote,
    name,
    company,
    phone,
    street,
    zip,
    city,
    country,
    snote,
  });

  res.status(StatusCodes.CREATED).json({ order });
};

const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};

const getSingleOrders = async (req, res) => {
  res.send('single order');
};

export { addNewOrder, getAllOrders, getSingleOrders };
