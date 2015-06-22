// Create a function that returns new functions that return true!

var createFunction = function () {};

test("createFunction", function() {

    ok(typeof createFunction() === 'function',
        'createFunction() should return a function');
    ok(createFunction()() === true,
        "calling createFunction's returned function should return true");

}); 