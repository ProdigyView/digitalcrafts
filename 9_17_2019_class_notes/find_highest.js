
var numbers = [-3, -8, -12, -1, -6, -15, -3];

//Add All The Values In The Array and Print To Screen
var final = 0;

for(var i=0; i<numbers.length; i++) {

  final += numbers[i];
}

console.log(final);

//Using The For Loop and If Statemements inside the for loop
//Find the largest number in the array

var largestNumber = numbers[0];

for(var i =0; i<numbers.length; i++) {
   
   if(numbers[i] > largestNumber) {
       largestNumber = numbers[i];
   }
}

console.log(largestNumber);


//Step 1
// Create a for loop that creates an array of 100 random numbers

var randomArray = [];

for(var i =0; i<100; i++) {
    randomArray.push(Math.random());
}

console.log(randomArray);
//Step 2
// From the random number array created above, find the smallest number

var smallest = randomArray[0];

for(var i=0; i< randomArray.length; i++) {
    if(randomArray[i] < smallest) {
       smallest = randomArray[i];
    }
}

console.log(smallest);
