//Google Javascript Concatentation
function lvl3exercise1 () {
  // Create a "hello" and a "world", return the concatenation of the two

  //Way 1
  return "hello" + "world";

  //Way 2
  var str1 = "Hello"
  var str2 = "World"

  return str1.concat(str2)

}

function lvl3exercise2 () {
  // Create a "hello" and a 12, return the concatenation of the two

 //Way 1
  return "Hello" + 12;

  //Way 2
  var x = 12;
  var str = "Hello"

  return str.concat(x.toString())

  //Wrong
  var x = 12;
  var str = "Hello";

  x.concat(str);
   
}
// Google Javascript number to string
function lvl3exercise3 () {
  // Create a variable that equals 12 and convert it to a string with concatenation. Return it.
  var x = 6+6
  return "" + x.toString()

}

function lvl3exercise4 () {
  // Create a "hello world!" string. Return the length of the string
  var string = "hello world"
  return string.length;

}

//Google Javascript Find Substring
function lvl3exercise5 () {
  // Create a "hello world!" string. Return the index of the word "world".
  var str = "hello world";
  retur str.indexOf("world");

}
