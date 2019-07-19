const express = require("express"),
    router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.send("Welcome to the index.js page").Status(200);
});

module.exports = router;
