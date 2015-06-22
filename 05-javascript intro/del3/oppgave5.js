function greaterThanZero(element, index, array) {
    return element > 0;
}

// Implement every so that it returns true if all calls to func were true.

function every(array, func) {
    return "";
}

test("Every", function() {

    ok(every([1, 2, 3], greaterThanZero) === true);
    ok(every([1, -2, 3], greaterThanZero) === false);

}); 