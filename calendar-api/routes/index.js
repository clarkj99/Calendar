const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/*', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = router;
