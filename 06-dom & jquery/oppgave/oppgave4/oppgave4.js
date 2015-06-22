/*

 Alle oppgavene skal løses med javascript. Det er ikke lov å endre HTML-en.

 5) Fjern .checked fra bananer

 */

test("Oppgave 5", function() {
    ok($("#shopping-list li").eq(2).hasClass("checked") === false, "Fjern .checked fra bananer")
});