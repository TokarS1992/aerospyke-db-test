import mongoose from 'mongoose';
import {DB_CONFIG, getConnectionClusterUrl} from './db.config';

export const start = async () => {
  try {
    await mongoose.connect(getConnectionClusterUrl(), {
      autoIndex: true,
      dbName: DB_CONFIG.dbName,
    });
  } catch (e) {
    console.error(e);
  }
};
