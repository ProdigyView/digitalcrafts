

var add = function(a,b) {
	return a+b;
}

var calculate = function(a,b,callback) {
	return callback(a,b);
}

console.log(calculate(5,2,add));
