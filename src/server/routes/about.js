var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({
    title: "About",
    image: "public/images/about-min.jpg",
    description: "Rob started taking classical piano lessons at age 5, eventually coming to study under Ida Trebecka and playing competitively throughout middle and high school. While studying Biology at Cornell University, Rob was exposed to and particularly intrigued by jazz and hip-hop, and worked for several years to form a unique musical voice colored by these influences." +
                 "Rob began a doctorate degree in 2016, but withdrew shortly after to pursue music full time. Since then, Rob has worked and performed with a wide variety of artists including Tom Misch, Masego, ELEW, MonoNeon, and many others. Rob currently resides in Los Angeles, California, doing work as a keyboardist, composer, producer, and teacher."
  });
});

module.exports = router;
