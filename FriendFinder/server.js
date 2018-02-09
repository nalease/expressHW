
var express = require("express");
var bodyP = require("body-parser");
var path = require("path");

var app = express();

var port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", function(req,res) {
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].questionType === req.params.questionType) {
      return res.render("Question", questions[i]);
    }
  }
});


app.listen(port);