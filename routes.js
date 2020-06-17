const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const api = require('./controller/test');
// here we can use router specific middleware
// other way to use app.route directly;

router.get('/test', api.test);

module.exports = router;
