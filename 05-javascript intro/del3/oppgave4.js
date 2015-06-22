// Implement filter so that it returns an 
// array with all the array elements that
// func returned true for.

var filter = function (array, func) {
    return "...";
};

test("Filter", function() {

    var data = [1, 2, 3, 4, 5, 6, 7, 9, 10];
    var isOdd = function (element) {
        return element % 2 === 1;
    };
    var result = filter(data, isOdd);

    ok(result[0] === 1, "The 1st element should be 1");
    ok(result[1] === 3, "The 2nd element should be 3");
    ok(result[2] === 5, "The 3rd element should be 5");
    ok(result[3] === 7, "The 4th element should be 7");
    ok(result[4] === 9, "The 5th element should be 9");

}); 