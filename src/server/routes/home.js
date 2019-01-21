var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({
    name: "Rob Araujo",
    subtitles: ["Pianist", "Producer", "Educator"],
    links: [
        {
          icon: "fa-facebook-official", // from ion-icons set
          url: "https://www.facebook.com/robaraujomusic1"
        },
        {
          icon: "fa-instagram",
          url: "https://www.instagram.com/robarousal"
        },
        {
          icon: "fa-spotify",
          url: "https://open.spotify.com/artist/6mWAKV1AAFvzxQr7uztRE9"
        },
        {
          icon: "fa-soundcloud",
          url: "https://soundcloud.com/rob_araujo"
        },
        {
          icon: "fa-bandcamp",
          url: "https://robaraujo.bandcamp.com/"
        },
    ],
    heroImage: "public/images/hero-min-min.jpg"
  });
});

module.exports = router;
