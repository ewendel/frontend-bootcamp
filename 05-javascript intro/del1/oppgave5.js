// Make the doubleMe function return the value doubled for numbers and the string repeated twice for strings.

function doubleMe (val) {
    return val+val;
}

test("doubleMe", function() {
    ok(doubleMe(17) === 34,
        '17 doubled should equal "34"');
    ok(doubleMe('painnkaak') === 'painnkaakpainnkaak',
        'painnkaak doubled should equal "painnkaakpainnkaak"');
}); 