/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

var checkpoint = 60;

while (checkpoint >= 0){
    if (checkpoint === 50){
        console.log("Orbiter transfers from ground to internal power");
    } else if (checkpoint === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (checkpoint === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (checkpoint === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (checkpoint === 6) {
        console.log("Main engine start");
    } else if (checkpoint == 0){
        console.log("Solid rocket booster ignition and liftoff! ");
    } else {
        console.log("T-" + checkpoint + " seconds");
    }

    checkpoint = checkpoint - 1;
}
