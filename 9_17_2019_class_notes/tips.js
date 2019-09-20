
var calculatePoints = function(actions) {
	var points = 0;

	for(var i = 0; i<actions.length; i++) {
		if(actions[i] == "brought_check" || actions[i] == "greeted_you" || actions[i] == "appetizers"
		|| actions[i] == "refills" || actions[i] =="checked_food") {
			points += 1;
		}
	}

	return points;
}


var calculateTip = function(bill, points) {

	if(points == 0) {
		return (bill/100) * 1;
	} else if(points == 1) {
		return (bill/100) * 2;
	} else if(points == 2) {
                return (bill/100) * 4;
        } else if(points == 3) {
                return (bill/100) * 7;
        } else if(points == 4) {
                return (bill/100) * 10;
        } else if(points == 5) {
                return (bill/100) * 15;
        }

	return 0;

}

var waitersActions = ["trip_n_fell", "refills", "evil_side_eye", "checked_food"];

var earnedPoints = calculatePoints(waitersActions);

var tipGiven = calculateTip(20, earnedPoints);

console.log("Points " + earnedPoints);
console.log("Tip " + tipGiven);
