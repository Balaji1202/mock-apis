require('dotenv/config');
const mongodb = require('mongodb');
module.exports = loadDataFromMongo = async function(collectionName) {
  try {
    const client = await mongodb.MongoClient.connect(process.env.db_key, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    return client.db('api').collection(collectionName);
  } catch (err) {
    throw new Error(err)
  }
}