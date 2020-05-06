const express = require('express');
const personalInfoRouter = express.Router();
const loadDataFromMongo = require('./../mongodb');

personalInfoRouter.get('/', async(req, res) => {
  const data = await loadDataFromMongo('personalInfo');
  if (req.query) {
    res.send(await data.find(req.query).toArray());
  } else {
    res.send(await data.find({}).toArray());
  }
});

// Get the collections via normal params of id
personalInfoRouter.get('/:id', async(req, res) => {
  const data = await loadDataFromMongo('personalInfo');
  let id = Number(req.params.id);
  res.send(await data.find({ _id: id }).toArray());
});


// Create collection from JSON
const pushCollection = async() => {
    // const jsonData = require('./../../personal_mock.json');
    const posts = await loadDataFromMongo('personalInfo');
    jsonData.forEach((data, index) => {
      data._id = index;
      posts.insertOne(data);
    });
  }
  // await pushCollection();

// Delete collection
const deleteCollection = async() => {
    const posts = await loadDataFromMongo('personalInfo');
    posts.deleteMany();
  }
  // deleteCollection();

module.exports = personalInfoRouter;