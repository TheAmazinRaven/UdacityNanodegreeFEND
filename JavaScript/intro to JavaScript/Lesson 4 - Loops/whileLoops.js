// var x = 1;
// console.log(x + " Mississippi");

// var x = x + 1;
// console.log(x + " Mississippi");

// var x = x + 1;
// console.log(x + " Mississippi");

// Repeating the same code over & over again is not wise.

// Loops let you iterate over values and repeatedly run a block of code.

var x = 1;

while (x <= 10000) {
    console.log(x + " Mississippi")
    x = x + 1;
}

/*

PARTS OF A WHILE LOOP

1. When to start: The code that sets up the loop — defining the starting value of a variable for instance.

2. When to stop: The logical condition to test whether the loop should continue.

3. How to get to the next item: The incrementing or decrementing step — for example, x = x * 3 or x = x - 1

The following is a basic while loop that includes all three parts.

*/

var start = 0; // when to start
while (start < 10) { // when to stop
    console.log(start);
    start = start + 2; // how to get to the next item
}
