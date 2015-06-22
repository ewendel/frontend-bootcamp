// Set the three properties, in three different ways.

var person = {

};

test("Person", function() {

    ok(person.name === 'bob', 'name should equal "bob"');
    ok(person.gender === 'male', 'gender should equal "male"');
    ok(person.weight === 100, 'weight should equal 100');

});