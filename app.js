const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const port = process.env.PORT || 3000;
const path = require('path');
const router = require('./router/router');

require('dotenv').config({ path: '.env' });

app.use('/', router);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(chalk.magenta(`server running on ${port}`));
});

