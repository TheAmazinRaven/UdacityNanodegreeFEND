// Return & print are not the same thing.

function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    return "Retuning: I am returning this string!";
}

isThisWorking(3);