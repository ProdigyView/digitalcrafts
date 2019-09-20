//In this assigment, we are going to have a for loop that
//iterates over 20 numbers [1 through 20]

//if the number at the current i is divisble by both 2 and 3, console.log("FizzBuzz");
//if the number at the current i is only divisible by 2, console.log("Fizz");
//if the number at i is only divisble by 3, console.log("Buzz");

//For division (if divisible), its if(number % other_number)


for(var i=0; i<20; i++) {
	
	if(i%3== 0 && i%2==0) {
		console.log(i + " FizzBuzz");
	} else if(i%3==0) {
		console.log(i + " Fizz");
	} else if(i%2==0) {
		console.log(i + " Buzz");
	}

}







