var splitInteger = function(num, parts) {
  // Complete this function

  var val;
  var mod = num % parts;
  if(mod == 0){
    val = num/parts;
    retData = Array(parts).fill(val);
  } else {
    val = (num-mod)/parts;
    retData = Array(parts).fill(val);
    for(i=0;i<mod;i++){
      retData[i] = retData[i] + 1;
    }
    retData.reverse()
  }

  return retData;

}
var d = splitInteger(25, 4)
console.log(d);
console.log("sum - " + d.reduce(function(a,b){return a+b}));
