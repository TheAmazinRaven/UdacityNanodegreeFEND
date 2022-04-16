var studentName = "John";
var haveEnrolledInCourse = true;
var haveCompletedTheCourse = false;

if (haveEnrolledInCourse) {
    console.log("Welcome " + studentName + " to Udacity!"); // Will run only if haveEnrolledInCourse is true
}

// -----------------

var a = 10;
var b = 20;

if (a > b ) // the outcome of a > b will be a boolean
    console.log("Variable 'a' has a higher value"); // if a > b is true
else
    console.log("Variable 'b' has higher value"); // if a > b is false
    
// True is 1 and False is 0

if (1) {
    console.log("This statement will always execute because conditional is set to 1 i.e., true");
}

if (0) {
    console.log("This statement will NEVER execute becuase conditional is set to 0 i.e., false");
}