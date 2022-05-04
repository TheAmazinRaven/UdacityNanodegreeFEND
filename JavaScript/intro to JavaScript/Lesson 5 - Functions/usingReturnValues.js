// returns the sum of two numbers

function add(x, y) {
    return x + y;
}

// returns the value of a number divided by 2

function dividedByTwo(num) {
    return num / 2;
}

var sum = add(5, 7); // call the "add" function and store the returned value in the sum variable
var average = dividedByTwo(sum); // call the "dividedByTwo" function and store the value in the "average" variable

console.log(sum, average);