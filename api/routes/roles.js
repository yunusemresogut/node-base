var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ success: true, message: 'Roles' });
});

module.exports = router;