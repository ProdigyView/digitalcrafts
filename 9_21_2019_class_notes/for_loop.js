//Exercise 3 - The Challenge
//Please follow the directions below. Execute each step 1 at a time before moving onto the next step
//as to help not become confused or overwhelmed.
//Create an empty array called coordinates. This array should be a global variable.
//Create 1 For Loop. The for loop should start at 0, i must be less than 20, increment i by one
//Create another for loop inside that for loop defined above. Its variable should j. J should start
//at 20, must be greater than 0, and decrement by 1
//Inside the inner for loop J, create a new array called tmp. This array should contain the values of both
//i and j. Push the array tmp array into your global array above.
//After both loops are done executing, print the global variable to screen.
//What do you see?

var coordinates = [];

for(var i =0; i<20; i++) {

        for(var j=20;j>0;j--) {
            var tmp = [i, j];
            coordinates.push(tmp);
        }
}

console.log(coordinates);