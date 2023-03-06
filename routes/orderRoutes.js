import express from 'express';
const router = express.Router();

import {
  addNewOrder,
  getAllOrders,
  getSingleOrders,
} from '../controllers/orderController.js';

router.route('/').get(getAllOrders).post(addNewOrder);

router.route('/:id').get(getSingleOrders);

export default router;
