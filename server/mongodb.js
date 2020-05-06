require('dotenv/config');
const mongodb = require('mongodb');
module.exports = loadDataFromMongo = async function(collectionName) {
  try {
    let dbName = process.env.db_name;
    let dbPswd = process.env.db_pswd;
    let clusterName = process.env.cluster_name;
    let uri = `mongodb+srv://${dbName}:${dbPswd}@${clusterName}.mongodb.net/test?retryWrites=true&w=majority`
    const client = await mongodb.MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    return client.db('api').collection(collectionName);
  } catch (err) {
    throw new Error(err)
  }
}