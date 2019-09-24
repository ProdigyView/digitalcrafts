//We are going have an array of items.
//We are going to create a function with 2 parameters
//The first parameter will be an array to search
//The second parameter will be a value to find

//Inside the function, use a for loop to go through the array
//and return true if it finds the second parameter inside the array
//otherwise return false

var items = ["Cat", "Dog", "Snake", "Ferret", "Big Foot"];

var findItem = "Big Foots Wife";

var searchItems = function(haystack, needle) {

	for(var i = 0; i<haystack.length;i++) {
		if(haystack[i] == needle){
			return true;
		}
	}

	return false;
}

var result = searchItems(items,findItem);
console.log(result);
