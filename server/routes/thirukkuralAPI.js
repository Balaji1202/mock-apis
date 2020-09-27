const express = require('express');
const thirukkuralRouter = express.Router();
const loadDataFromMongo = require('../mongodb');

thirukkuralRouter.get('/', async(req, res) => {
  const data = await loadDataFromMongo('thirukkural');
  if (req.query) {
    res.send(await data.find(req.query).toArray());
  } else {
    res.send(await data.find({}).toArray());
  }
});

// Get the collections via normal params of id
thirukkuralRouter.get('/:id', async(req, res) => {
  const data = await loadDataFromMongo('thirukkural');
  let id = Number(req.params.id);
  res.send(await data.find({ _id: id }).toArray());
});


// Create collection from JSON
const pushCollection = async() => {
    const kuralData = require('thirukkural.json');
    const thirukkural = await loadDataFromMongo('thirukkural');
    kuralData.forEach((data, index) => {
        data._id = index;
        thirukkural.insertOne(data);
    });
}
// pushCollection();

// Delete collection
const deleteCollection = async() => {
    const kuraldetails = await loadDataFromMongo('kuraldetails');
    kuraldetails.deleteMany();
    const thirukkural = await loadDataFromMongo('thirukkural');
    thirukkural.deleteMany();
  }
// deleteCollection();

module.exports = thirukkuralRouter;