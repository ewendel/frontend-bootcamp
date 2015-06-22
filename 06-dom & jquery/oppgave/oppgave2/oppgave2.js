/*

 Alle oppgavene skal løses med javascript. Det er ikke lov å endre HTML-en.

 2) Legg til klassen checked på alle elementene i listen

 */

test("Oppgave 2", function() {
    for(var i = 0; i < $("#shopping-list li").length; i++) {
        ok($(".shopping-list-container li").eq(i).hasClass("checked") === true, "Alle elementene skal ha klassen checked")
    }
});
