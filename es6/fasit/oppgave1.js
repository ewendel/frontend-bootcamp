"use strict";

//Kommenter inn testene og få de til å bli grønn

let s = 1;
let a = 4;

(function () {
    a = 5;
    s = 2;
    let s = 3;
    let func;

    if (true) {
        let c = 3;
        func = function f () {
            let s = 7;
            return s;
        }
    }

    test("Scope (1)", function() {
        ok(a === 5);
        ok(s === 3);

    });

    func();

    test("Scope (1)", function() {
        ok(a === 5);
        ok(s === 3);

    });

})();

test("Scope (2)", function() {
    ok( s === 1);
    ok( a === 5);
});