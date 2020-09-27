const express = require('express');
const thirukkuralDetailsRouter = express.Router();
const loadDataFromMongo = require('./../mongodb');

thirukkuralDetailsRouter.get('/', async(req, res) => {
  const data = await loadDataFromMongo('thirukkuralDetails');
  if (req.query) {
    res.send(await data.find(req.query).toArray());
  } else {
    res.send(await data.find({}).toArray());
  }
});

// Get the collections via normal params of id
thirukkuralDetailsRouter.get('/:id', async(req, res) => {
  const data = await loadDataFromMongo('thirukkuralDetails');
  let id = Number(req.params.id);
  res.send(await data.find({ _id: id }).toArray());
});


// Create collection from JSON
const pushCollection = async() => {
    const thirukkuralDetailsData = require('thirukkuralDetails.json');

    const thirukkuralDetails = await loadDataFromMongo('thirukkuralDetails');
    thirukkuralDetailsData.forEach((data, index) => {
      data._id = index;
      thirukkuralDetails.insertOne(data);
    });
}
// pushCollection();

// Delete collection
const deleteCollection = async() => {
    const thirukkuralDetails = await loadDataFromMongo('thirukkuralDetails');
    thirukkuralDetails.deleteMany();
  }
// deleteCollection();

module.exports = thirukkuralDetailsRouter;