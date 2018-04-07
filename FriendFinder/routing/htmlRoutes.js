var path = require("path");
var survey = require("/../public/survey.html");
var home = require("/../public/home.html");


app.get("/survey", function (req, res) {
   res.sendFile("/../public/survey.html");
});

app.get("/", function (req, res) {
    res.sendFile("/../public/home.html");

module.exports = htmlRoutes