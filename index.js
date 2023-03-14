import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';

// routers
import authRouter from './routes/orderRoutes.js';
import contactRouter from './routes/contactRoutes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Starter Route');
});

app.use('/api/v1/order', authRouter);
app.use('/api/v1/contact', contactRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server start at port no :${port}`);
});
