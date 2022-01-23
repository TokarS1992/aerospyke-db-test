import mongoose from 'mongoose';
import { getConnectionClusterUrl } from './db.config';

export const start = async (callback?: (...args) => void) => {
  try {
    await mongoose.connect(getConnectionClusterUrl(), {
      autoIndex: true,
      autoCreate: false,
    }, callback);
  } catch (e) {
    console.error(e);
  }
};
