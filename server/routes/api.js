const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send(`Hello, welcome to api engine`));

const movieRouter = require('./moviesAPI');
router.use('/movies', movieRouter);

const stockMarketRouter = require('./stockMarketAPI');
router.use('/stockmarket', stockMarketRouter);

const personalInfoRouter = require('./personalInfoAPI');
router.use('/personalinfo', personalInfoRouter);

module.exports = router;