var express = require('express');
var { createStream } = require('../services/youtube/stream')
var { createFile } = require('../services/youtube/file')

var router = express.Router();

/* GET users listing. */
router.get('/file', async (req, res, next) => {
  try{
    const file = await createFile()
    // stream.pipe(res)
    res.send(file)
  } catch (err) {
    console.log(err)
  }
  
});

router.get('/stream', (req, res, next) => {
  createStream().pipe(res)
});

module.exports = router;
