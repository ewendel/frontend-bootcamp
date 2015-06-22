// Populate the array, please

var arr = [];
var i;
for (i = 0; i < 10; i += 1) {
    // ..
}

test("Array", function() {

    ok(arr[0] === 0, 'first element should equal 0');
    ok(arr[1] === 1, 'second element should equal 1');
    ok(arr.length === 10, 'array length should be 10');

});