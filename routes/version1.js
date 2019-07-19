const express = require("express"),
    router = express.Router(),
    request = require("request");

// const BoxScore = require("../models/baseball");

/* GET home page. */
router.get("/", function(req, res, next) {
    res.send("Welcome to betting overseer").Status(200);
});

router.get("/games", function(req, res) {
    request({
        uri:
            "https://api.sportradar.us/mlb/trial/v6.5/en/games/2019/07/18/boxscore.json",
        qs: {
            api_key: "ugxxey86tyxcapgr85takxbk"
        },
        function(err, res, body) {
            if (!err && res.statusCode === 200) {
                console.log(body);
            }
        }
    }).pipe(res);
});

//get odds data FOR A FUTURE DAY OR BEFORE ANY GAMES HAVE STARTED!!!!!
//a typeError: cannot read property '2' of undefined occurs
router.get("/odds", function(req, res) {
    request({
        url:
            "https://api.sportradar.us/oddscomparison-ust1/en/eu/sports/sr:sport:3/2019-07-19/schedule.json",
        qs: {
            api_key: "9xgzxmq73endqa39azfx5etq"
        },
        function(err, res, body) {
            if (!err && res.statusCode === 200) {
                console.log(body);
            }
        }
    }).pipe(res);
});

module.exports = router;
