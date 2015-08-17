// Make the function times return a function that returns the next multiple of n for each subsequent call.

var times = function (n) {

};

var times2 = times(2);

test("times2", function() {
    ok(times2() === 2);
    ok(times2() === 4);
    ok(times2() === 6);
}); 