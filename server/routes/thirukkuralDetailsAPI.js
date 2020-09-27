const express = require('express');
const thirukkuralDetailsRouter = express.Router();
const loadDataFromMongo = require('./../mongodb');

thirukkuralDetailsRouter.get('/', async(req, res) => {
  const data = await loadDataFromMongo('kural');
  if (req.query) {
    res.send(await data.find(req.query).toArray());
  } else {
    res.send(await data.find({}).toArray());
  }
});

// Get the collections via normal params of id
thirukkuralDetailsRouter.get('/:id', async(req, res) => {
  const data = await loadDataFromMongo('kural');
  let id = Number(req.params.id);
  res.send(await data.find({ _id: id }).toArray());
});


// Create collection from JSON
const pushCollection = async() => {
    const kuraldetailsData = require('kuraldetails.json');

    const kuraldetails = await loadDataFromMongo('kuraldetails');
    kuraldetailsData.forEach((data, index) => {
      data._id = index;
      kuraldetails.insertOne(data);
    });
}
// pushCollection();

// Delete collection
const deleteCollection = async() => {
    const kuraldetails = await loadDataFromMongo('kuraldetails');
    kuraldetails.deleteMany();
    const kural = await loadDataFromMongo('kural');
    kural.deleteMany();
  }
// deleteCollection();

module.exports = thirukkuralDetailsRouter;