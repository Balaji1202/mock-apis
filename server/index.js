const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Welcome to the api engine'));

const router = require('./routes/api');
app.use('/api', router);


app.listen(port, () => console.log(`App listening at ${port}`));