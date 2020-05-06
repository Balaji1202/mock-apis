const express = require('express');
const stockMarketRouter = express.Router();
const loadDataFromMongo = require('./../mongodb');

stockMarketRouter.get('/', async(req, res) => {
  const data = await loadDataFromMongo('stockmarket');
  if (req.query) {
    res.send(await data.find(req.query).toArray());
  } else {
    res.send(await data.find({}).toArray());
  }
});

// Get the collections via normal params of id
stockMarketRouter.get('/:id', async(req, res) => {
  const data = await loadDataFromMongo('stockmarket');
  let id = Number(req.params.id);
  res.send(await data.find({ _id: id }).toArray());
});


// Create collection from JSON
const pushCollection = async() => {
    // const jsonData = require('./../../stock_mock.json');
    const posts = await loadDataFromMongo('stockmarket');
    jsonData.forEach((data, index) => {
      data._id = index;
      posts.insertOne(data);
    });
  }
  // await pushCollection();

// Delete collection
const deleteCollection = async() => {
    const posts = await loadDataFromMongo('stockmarket');
    posts.deleteMany();
  }
  // deleteCollection();

module.exports = stockMarketRouter;