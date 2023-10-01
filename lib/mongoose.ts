import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) return console.log('MONGO_DB_URL_NOTFOUND');

  if (isConnected) return console.log('Successfully connected to mongodb');

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log('Success connect');
  } catch (error) {
    console.log(error);
  }
};
