var add = function(num1, num2) {
    return num1 + num2;
}

var subtract = function(num1, num2) {
    return num1-num2;
}

var calculator = function(a, b, operand) {
    return operand(a,b);
}

var result = calculator(5, 10, add);
console.log(result);

var result = calculator(20, 10, subtract);
console.log(result);

var result = calculator(3, 2, function(num1, num2) {
    return num1 * num2;
});

console.log(result);

var result = calculator(6, 2, function(num1, num2) {
    return num1 / num2;
});

console.log(result);

//Using the calculator function, write a function that
// takes in 2 numbers, multiples it, and finds the remainder
//if divided by 5

var someFunction = function(num1, num2) {
   return (num1 * num2) % 5;
}

calculator(20, 5, someFunction);

//Not defining function
calculator(20, 5, function(num1, num2) {
    return (num1 * num2) % 5;
 });

 //Write a function, that uses the calculator function.
 //Have it add the two number together, and then find the square root
 //Use the add function inside the function that will find the square root


 calculator(6, 3, function(num1, num2){
    var result = add(num1, num2);

    return Math.sqrt(result);
 });

 calculator(6, 3, function(num1, num2){
    return Math.sqrt(add(num1, num2); 

});
