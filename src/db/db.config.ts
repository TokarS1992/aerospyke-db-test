import {ConnectOptions} from "mongodb";
import dotenv from 'dotenv';

type DbConfig = Partial<ConnectOptions> & {
  [k: string]: any;
};

dotenv.config();

export const DB_CONFIG: DbConfig = {
  clusterName: process.env.CLUSTER_NAME || 'test-cluster-user',
  password: process.env.DB_PASS,
  dbName: process.env.DB_NAME || 'db-selfeducation',
};

export const getConnectionClusterUrl = () => `mongodb+srv://${DB_CONFIG.clusterName}:${DB_CONFIG.password}@clustertestdb.zamtj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
