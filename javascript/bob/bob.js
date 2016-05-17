//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var inputArray = input.split("");
  if(input === input.toUpperCase()
  && input.length > 2
  && isNaN(inputArray[input.length-1])) {
    return "Whoa, chill out!";
  } else if (input.length > 1 && input.indexOf("?") === (input.length-1)){
    return "Sure."
  } else if (input.trim().length !== 0) {
  return "Whatever.";
} else {
  return "Fine. Be that way!";
}
};

module.exports = Bob;
