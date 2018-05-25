const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('./'));
app.use('/js', express.static('./UI/JS'));
app.use('/css', express.static('./UI/CSS'));
app.use('/html', express.static('./UI/HTML'));

app.use(routes);

var port = process.env.PORT || 8000;
app.listen(port);
