/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */
 
var ha = "";

function laugh(num) {
    for (var x = 0; x < num; x++) {
        ha = ha + "ha";
    }
    return ha;
}

 console.log(laugh(4) + "!");
 

/*

function add(x, y) {
    var sum = x + y;
    return sum;
}

var sum = add(1, 2);

-----------------------

function sayHello() {
    var message = "Hello!"
    return message; // returnns value instead of printing it
}

// function returns "Hello!" and console.log prints the return value

console.log(sayHello());

--------------------

// declares the sayHello function
function sayHello() {
    var message = "Hello!"
    return message; // returns value instead of printing it
}

*/