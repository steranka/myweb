var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // Return the file server/public/index.html
    // The server's root dir is server/public.
    res.render(require("index.html"), {title: 'myweb app'});
});

module.exports = router;
