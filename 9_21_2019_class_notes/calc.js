

var calculator = {
    add : function(num1 , num2) {
        return num1+num2;
    },
    subtract : function(num1, num2) {
        return num1-num2;
    }
};

var result = calculator.add(5,3);
console.log(result);

var result = calculator.add(10,5);
console.log(result);

var result = calculator.subtract(15,5);
console.log(result);

var result = calculator.subtract(20,10);
console.log(result);