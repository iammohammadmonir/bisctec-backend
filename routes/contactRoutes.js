import express from 'express';

const router = express.Router();

import newContact from '../controllers/contactController.js';

router.route('/').post(newContact);

export default router;
