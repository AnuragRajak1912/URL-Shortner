const express = require('express')
const router = express.Router();
const {addURL,accessURL,get,access} = require('../controller/url')
router.get('/',get)
router.get('/:shortID',access)
router.post('/addURL',addURL)
// router.post('/accessURL',accessURL)
module.exports = router;