var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({
    links: ["<iframe style=\"border: 0; width: 700px; height: 900px;\" src=\"https:\/\/bandcamp.com\/EmbeddedPlayer\/album=2837893482\/size=large\/bgcol=ffffff\/linkcol=0687f5\/minimal=true\/transparent=true\/\" seamless><a href=\"http:\/\/robaraujo.bandcamp.com\/album\/loading\">Loading... by Rob Araujo<\/a><\/iframe>",
            "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" src=\"https:\/\/w.soundcloud.com\/player\/?url=https%3A\/\/api.soundcloud.com\/tracks\/322942372&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"><\/iframe>",
            "<iframe src=\"https:\/\/open.spotify.com\/embed\/track\/64s75Jxg5DILfpihY7q56H\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\"><\/iframe>",
            "<iframe style=\"border: 0; width: 700px; height: 900px;\" src=\"https:\/\/bandcamp.com\/EmbeddedPlayer\/album=1577301886\/size=large\/bgcol=ffffff\/linkcol=0687f5\/minimal=true\/transparent=true\/\" seamless><a href=\"http:\/\/robaraujo.bandcamp.com\/album\/hybrid-eyes\">Hybrid Eyes by Rob Araujo<\/a><\/iframe>",
            "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" src=\"https:\/\/w.soundcloud.com\/player\/?url=https%3A\/\/api.soundcloud.com\/tracks\/325568706&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"><\/iframe>",
            "<iframe src=\"https:\/\/open.spotify.com\/embed\/track\/3J0xCjitma5FSLHDr4CMml\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\"><\/iframe>\r\n"]
  });
});

module.exports = router;
