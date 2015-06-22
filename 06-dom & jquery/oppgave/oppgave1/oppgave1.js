/*

 Alle oppgavene skal løses med javascript. Det er ikke lov å endre HTML-en.

 1) Fjern hele handlelisten fra siden, slik at den ikke ligger i DOM lengre

 */

test("Oppgave 1", function() {
    ok($(".shopping-list-container").length === 0, "Listen skal fjernes fra DOM")
});
