const express = require('express');
const { get } = require('http');
const path = require('path');
const app = express();
const router = express.Router();

app.use('/', (req, res) => {
    get.path(__dirname + '/pages/index.html')
});

app.use(express.static(__dirname + '/assets'))