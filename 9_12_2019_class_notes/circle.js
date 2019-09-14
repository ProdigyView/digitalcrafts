
var findAreaOfCircle = function(r) {
    return getPiValue() * (r*r);

}

var getPiValue= function() {
    return 3.1456493749;
}

var findPermiterOfOcatagion(dimension, width) {

    return  getPiValue() * (dimension + width);
}

console.log(findAreaOfCircle(5));
