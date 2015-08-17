// Create two functions: 
// 1. isOdd that returns true if the single parameter given is an odd number
// 2. square that returns the single parameter given multiplied with itself


// Finally, use these two functions in conjunction with Array's own map and filter functions to create a function called "evenSteven"
// that will accept a list of numbers and return a list of the squares of all numbers in the list that are even numbers


test("map and filter", function() {

    var numbers = [1,2,3,4,5,6,7,8,9,10];

    ok(numbers.filter(isOdd).toString() === "1,3,5,7,9", '');
    ok(numbers.map(square).toString() === "1,4,9,16,25,36,49,64,81,100", '');
    ok(evenSteven(numbers).toString() === "4,16,36,64,100")
});