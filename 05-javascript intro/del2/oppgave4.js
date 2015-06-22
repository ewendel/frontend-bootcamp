// Construct two car object instances.

function Car (type) {
    this.type = type;
}

var honda = ...
var bmw = ...

test("Car", function() {
    ok(honda.type === 'honda');
    ok(bmw.type === 'bmw');
}); 