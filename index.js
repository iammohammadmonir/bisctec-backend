import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

// routers
import authRouter from './routes/orderRoutes.js';
import contactRouter from './routes/contactRoutes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const __dirname = path.resolve();
    if (!fs.existsSync(__dirname + '/temp')) {
      fs.mkdirSync(__dirname + '/temp');
    }
    cb(null, './temp');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();
dotenv.config();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Starter Route');
});

app.use('/api/v1/order', upload.array('attachments', 4), authRouter);
app.use('/api/v1/contact', contactRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server start at port no :${port}`);
});
