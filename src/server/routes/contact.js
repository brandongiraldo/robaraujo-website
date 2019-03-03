var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({
    title: "Contact",
    image: "public/images/contact-min.jpg",
    imageAlt: "Rob"
  });
});

module.exports = router;
