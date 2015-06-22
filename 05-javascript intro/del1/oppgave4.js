// Complete addNumbers, a function that returns the sum of all the numbers contained the passed-in array

var numbers = [5,2,9,3,5,8,1,7,2,-7, 3,5,9,2,7,3,5,0,3,5,0,3,5,-3,7,1,9,1,4,8,3,7,2,5,2,0,4,2,5,7,1,2,0,5, 15, -5];

function addNumbers(numbers) {
    return 0;
}

test("Array iteration", function() {

    ok(addNumbers(numbers) === 167, 'Function didnt add numbers properly');
    ok(addNumbers([1,2,3]) === 6, 'Function didnt add numbers properly')

});