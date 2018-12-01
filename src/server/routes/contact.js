var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({
    title: "Contact"
  });
});

module.exports = router;
