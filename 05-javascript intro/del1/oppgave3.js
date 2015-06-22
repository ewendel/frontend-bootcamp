// Iterate over all the properties of the variable named collection and add the type of each property to an array called types.

var collection = {
    0: null,
    1: 1,
    2: 2.5,
    3: true,
    4: false || true && (3 !== undefined),
    5: function() {},
    6: undefined
};

test("Object property types", function() {

    ok(String(types) === "object,number,number,boolean,boolean,function,undefined",
        '');
}); 
