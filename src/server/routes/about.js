var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({
    username: "Rob Araujo"
  });
});

module.exports = router;
