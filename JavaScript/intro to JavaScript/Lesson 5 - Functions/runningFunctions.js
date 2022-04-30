/*

How to run a function
Now, to get your function to do something, you have to invoke or call the function using the function name, followed by parentheses with any arguments that are passed into it. Functions are like machines. You can build the machine, but it won't do anything unless you also turn it on. Here's how you would call the sayHello() function from before, and then use the return value to print to the console:

*/

// declares the sayHello function
function sayHello() {
    var message = "Hello!"
    return message; // returnns value instead of printing it
}

// function returns "Hello!" and console.log prints the return value

console.log(sayHello());