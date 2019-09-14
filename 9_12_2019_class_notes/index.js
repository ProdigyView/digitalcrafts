var ltvFunction = function(ARPA, MM, churn) {

    var LTV = (ARPA*MM)/churn;

    return LTV;

}

console.log(ltvFunction(10, 2, 5));

console.log("Steve thinks the LTV should be " + ltvFunction(5, 4, 3));


console.log("John thinks the LTV should be" + ltvFunction(5,20, 3));


var calculatePi = function r) {
    var area = 3.14 * (r*r);

    return area;
}

console.log(caculatePi(3.14, 6));
