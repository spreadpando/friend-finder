
var friendsList = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });

    app.post("/api/friends", function (req, res) {
        let minimum = 40;
        let match = {};
        for (let i in friendsList) {
            let difference = 0;
            for (let j in friendsList[i]['scores']) {
                difference += Math.abs(req.body['scores'][j] - friendsList[i]['scores'][j]);
                if (difference < minimum) {
                    minimun = difference;
                    match = friendsList[i];
                }
            }

        }
        friendsList.push(req.body);
        res.json(match);
    });


    app.post("/api/clear", function (req, res) {
        friendsList.length = 0;
        res.json({ ok: true });
    });
};
