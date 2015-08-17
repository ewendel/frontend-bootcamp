// Log numbers 0-4 correctly by wrapping the anonomous function in a function that is run immediately to bind variable i:

// To run, hit "Run" in the upper right corner. :)

var i;
for (i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i*1000);
}