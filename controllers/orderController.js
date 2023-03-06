import Order from '../models/Order.js';
import { StatusCodes } from 'http-status-codes';

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

  res.status(StatusCodes.CREATED).json({ order });
};

const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};
const getSingleOrders = async (req, res) => {
  res.send('hello');
};

export { addNewOrder, getAllOrders, getSingleOrders };
