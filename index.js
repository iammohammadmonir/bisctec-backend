import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';

// routers
import authRouter from './routes/orderRoutes.js';

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

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
