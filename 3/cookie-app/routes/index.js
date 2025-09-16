var express = require('express');
var path = require('path');
var router = express.Router();

/* GET forside */
router.get('/', async (req, res) => {
  res.render('index', { title: 'Cookie App' });
});

router.get('/image', async (req, res) => {  
  // Set cache-control and pragma headers to prevent caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Pragma', 'no-cache');
  res.sendFile(path.join(__dirname, "../public/images", "cbs.jpeg"));
});

module.exports = router;