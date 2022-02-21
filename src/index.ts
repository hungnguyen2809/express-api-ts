import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import morgan from 'morgan';
import { connectMongoose } from './database';
import routes from './routes';

dotenv.config();
const APP_PORT = process.env.PORT || 8086;
// const APP_PRODUCT = process.env.APP_PRODUCT === 'true';

const app = express();
const server = http.createServer(app);

//Connect Database
connectMongoose();

//Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// (async () => {
//   if (!APP_PRODUCT) {
//     const morgan = await import('morgan');
//     app.use(morgan.default('dev'));
//   }
// })();

app.get('/', (req, res) => {
  res.send('Wellcome, My name is Hung.');
});

app.use('/api', routes);

server.listen(APP_PORT, () => {
  console.log(`Server is runing at port: ${APP_PORT}; http://localhost:${APP_PORT}`);
});
