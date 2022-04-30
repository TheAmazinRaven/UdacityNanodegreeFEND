/* How to declare a function
Functions allow you to package up lines of code that you can use (and often reuse) in your programs.

Sometimes they take parameters like the pizza button from the beginning of this lesson. reheatPizza() had one parameter: the number of slices.

*/

function reheatPizza(numSlices) {
    // code that figures out reheat settings
}

function reverseString(reverseMe) {
    // code to reverse a string
}

/*

In both cases, the parameter is listed as a variable after the function name, inside the parentheses. And, if there were multiple parameters, you would just separate them with commas.

*/

function doubleGreeting(name, otherName) {
  // code to greet two people!
}

/*

But, you can also have functions that don't have any parameters. Instead, they just package up some code and perform some task. In this case, you would just leave the parentheses empty. Take this one for example. Here's a simple function that just prints out "Hello!".

*/

// accepts no parameters! parentheses are empty
function sayHello() {
  var message = "Hello!"
  console.log(message);
}

// --------------------------------------------------------------

// x and y are parameters in this function declaration
function add(x, y) {
  // function body
  // Here, `sum` variable has a scope within the function. 
  // Such variables defined within a function are called Local variables
  // You can try giving it another name
  var sum = x + y;
  return sum; // return statement
}

// 1 and 2 are passed into the function as arguments, 
// and the result returned by the function is stored in a new variable `sum`
// Here, `sum` is another variable, different from the one used inside the function
var sum = add(1, 2);

// what it looks like without all the text 

function add(x, y) {
    var sum = x + y;
    return sum;
}

var sum = add(1, 2);