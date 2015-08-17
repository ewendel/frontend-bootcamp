/* 
    Your task: make all the asserts pass
    Possible actions:
        change double dots into
            variables
            function calls
            typeof-s

    .. and only that.
    Don't change the source code.
*/

var a = 1;
b = 3;
var s = 1;

(function () {
    a = 2;
    b = 4;
    var C = 3;
    d = 1;
    s = 2;

    if (false) {
        var s;
        function f () {
            var s = 7;
            return s;
        }
    }

    test("Scope (1)", function() {

        // ok( .. === 2);
        // ok( .. === 4);
        // ok( .. === 3);
        // ok( .. === 1);
        // ok( .. === 2);
        // ok( .. === 7);

    });

})();

test("Scope (2)", function() {

    // ok( .. === 2);
    // ok( .. === 4);
    // ok( .. === 'undefined');
    // ok( .. === 1);
    // ok( .. === 1);
    // ok( .. === 'undefined');

}); 