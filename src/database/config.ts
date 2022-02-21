import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;

export const connectMongoose = (cbConnectDB?: () => void) => {
  return mongoose.connect(MONGODB_URL as string, (error) => {
    if (error) {
      console.log('Connected MongoDB Error: ', error);
      return;
    }
    console.log('Connected MongoDB');
    cbConnectDB?.();
  });
};
