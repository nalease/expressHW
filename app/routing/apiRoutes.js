var friends = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
app.post("/api/friends", function (req, res) {

var userData = req.body; 
var userScores = userData.scores;
var totalDifference = 10000;

var friendMatch = {
      name: "",
      photo: "",
      scores:""
    };

for (var i = 0; i < friends.length; i++) {
	
var sum = 0
	for (var a = 0; a < userScores.length; a++) {
		sum += Math.abs(friends[i].scores[a] - userScores[a]
	)}
	if (sum < totalDifference) {
		totalDifference = sum
		friendMatch.name = friends[i].name
		friendMatch.photo = friends[i].photo
	};
};


//$('.next').click(function() {
    //var inputs = $(this).parent().find('input[value=""]');
    //if (!inputs.length) {
        // you have empty fields if this section is reached
  //  }
//});
friends.push(userData);

res.json(friendMatch);
  });
};