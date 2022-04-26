// Ternary Operator

var isGoing = true;
var color;

if (isGoing) {
    color = "green";
} else {
    color = "red";
}

console.log(color);

// Don't do the above :P

// The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements.

// conditional ? (if condition is true) : (if condition is false)

var isGoing2 = true;
var color = isGoing2 ? "green" : "red";
console.log(color);

// Quiz Question

var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");