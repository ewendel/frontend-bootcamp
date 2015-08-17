// Complete the sum function, making it sum all arguments, no matter how many you give it.

function sum () {
    
}

test("Sum", function() {

    ok(sum() === 0, 'sum without arguments should be 0');
    ok(sum(1, 2) === 3, 'sum with arguments 1 and 2 should equal 3');
    ok(sum(1, 2, 3) === 6, 'sum with arguments 1, 2, and 3 should equal 6');

});