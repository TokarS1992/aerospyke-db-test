export const DB_CREDENTIALS = {
  clusterName: 'test-cluster-user',
  password: 'Sergpolo13135',
};

export const getConnectionClusterUrl = () => `mongodb+srv://${DB_CREDENTIALS.clusterName}:${DB_CREDENTIALS.password}@clustertestdb.zamtj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
