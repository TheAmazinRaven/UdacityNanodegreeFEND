/* 

The for loop explicitly forces you to define the start point, stop point, and each step of the loop. In fact, you'll get an Uncaught SyntaxError: Unexpected token ) if you leave out any of the three required pieces

for ( start; stop; step ) {
  // do this thing
}

*/

for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}