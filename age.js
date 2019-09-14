
var canDrive= function(age) {

    if(age > 16) {
       return true;
    }

    return false;
}

var canRentCar = function(age) {

    if(age > 25) {
      return true;
    }

    return false;
}

var canPlayInBallPit = function(age) {

   if(age <= 10) {
     return true;
   }

   return false;
}


var canDrink = function(age) {

    if(age>= 21) {
      return true;
    }

    return false;
}



/**
Sarah, age 32
Bob, age 19
Henry, age 22
Katie, age 9
*/

var resultArray = [];

var testAges =function(name, age) {
   
   var message = "";

   if(canDrive(age)) {
      message = name + " can drive";
   } else {
      message = name + " cannot drive";
   }

   resultArray.push(message);

   if(canDrink(age)) {
      message = name + " can drink";
   } else {
      message = name + " cannot drink";
   }

   resultArray.push(message);

   if(canRentCar(age)) {
      message = name + " can rent a car";
   } else {
      message = name + " cannot rent a car";
   }

   resultArray.push(message);

   if(canPlayInBallPit(age)) {
      message = name + " can play in ball pit";
   } else {
      message = name + " cannot play in ball pit";
   }

   resultArray.push(message);
}


testAges("Sarah", 35);
testAges("Bob", 21);
testAges("Henry", 17);
testAges("Katie", 9);

console.log(resultArray);
