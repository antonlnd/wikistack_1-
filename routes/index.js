var express = require('express');
var router = express.Router();
var models = require('../models');
const wikiRouter = require('./wiki');
const userRouter = require('./user');


router.use('/wiki', wikiRouter);

router.post('/', (req, res, next) => {
	res.send('got to POST /wiki/');
})

router.get('/', (req, res, next) => {
	res.send('got to GET /wiki/')
})

router.get('/add', (req, res, next) => {
	res.render('addpage');
})

module.exports = router;

