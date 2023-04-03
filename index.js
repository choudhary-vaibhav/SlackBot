const express = require('express');
const app = express();

require('dotenv').config();
require('./configs/slackBolt');
require('./configs/mongodb');

const port = process.env.PORT || 3000;



app.listen(port, () => console.log('Server running at ' + port + '...'));


