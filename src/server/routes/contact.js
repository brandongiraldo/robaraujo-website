var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({
    title: "Contact",
    image: "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Maine-Coon_02.jpg"
  });
});

module.exports = router;
