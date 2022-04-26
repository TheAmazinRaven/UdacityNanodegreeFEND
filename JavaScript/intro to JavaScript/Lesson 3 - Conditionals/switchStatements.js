// Switch Statements

// If you find yourself repeating else if statements in your code, where each condition is based on the same value, then it might be time to use a switch statement.

// Example of else if Statement

var option2 = 4;

if (option2 === 1) {
    console.log("You selected option 1.");
} else if (option === 2) {
    console.log("You selected option 2.");
} else if (option === 3) {
    console.log("You selected option 3.");
} else if (option === 4) {
    console.log("You selected option 4.");
} else if (option === 5) {
    console.log("You selected option 5.");
} else if (option === 6) {
    console.log("You selected option 6.");
}

// My own example.

var option = 2;

switch (option) {
    case 1:
        console.log("You selected option 1.");
        break;
    case 2:
        console.log("You selected option 2.");
        break;
    case 3:
        console.log("You selected option 3.");
        break;
}

console.log(option);

// Quiz Example

var month = 2;

switch(month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
}

console.log("There are " + days + " days in this month.");



