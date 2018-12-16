var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({
    name: "Rob Araujo",
    subtitles: ["Pianist", "Producer", "Educator"],
    links: [
        {
          icon: "fa-facebook-official", // from ion-icons set
          url: "https://facebook.com"
        }
    ]
  });
});

module.exports = router;
