import mongoose from 'mongoose';
import {DB_CONFIG, getConnectionClusterUrl} from './db.config';

export const start = async (callback?: (...args) => void) => {
  try {
    await mongoose.connect(getConnectionClusterUrl(), {
      autoIndex: true,
      dbName: DB_CONFIG.dbName,
    }, callback);
  } catch (e) {
    console.error(e);
  }
};
