const express = require('express');
const movieRouter = express.Router();
const loadDataFromMongo = require('./../mongodb');

movieRouter.get('/', async(req, res) => {
  const data = await loadDataFromMongo('movies');
  if (req.query) {
    res.send(await data.find(req.query).toArray());
  } else {
    res.send(await data.find({}).toArray());
  }
});

// Get the collections via normal params of id
movieRouter.get('/:id', async(req, res) => {
  const data = await loadDataFromMongo('movies');
  let id = Number(req.params.id);
  res.send(await data.find({ _id: id }).toArray());
});


// Create collection from JSON
const pushCollection = async() => {
    // const jsonData = require('./../../movie_mock.json');
    const posts = await loadDataFromMongo('movies');
    jsonData.forEach((data, index) => {
      data._id = index;
      posts.insertOne(data);
    });
  }
  // await pushCollection();

// Delete collection
const deleteCollection = async() => {
    const posts = await loadDataFromMongo('movies');
    posts.deleteMany();
  }
  // deleteCollection();

module.exports = movieRouter;