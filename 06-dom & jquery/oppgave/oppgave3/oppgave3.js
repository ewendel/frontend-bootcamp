/*

 Alle oppgavene skal løses med javascript. Det er ikke lov å endre HTML-en.

 3) Legg til klassen checked på "bananer og "melk" (men ikke på de andre)

 */

test("Oppgave 3", function() {
    ok($("#shopping-list li").eq(0).hasClass("checked"), "Legg til .checked på melk");
    ok($("#shopping-list li").eq(1).hasClass("checked") === false, "Brød skal ikke ha checked");
    ok($("#shopping-list li").eq(2).hasClass("checked"), "Legg til .checked på bananer");
    ok($("#shopping-list li").eq(4).hasClass("checked") === false, "Fiskekaker skal ikke ha checked");
    ok($("#shopping-list li").eq(4).hasClass("checked") === false, "Kålrot skal ikke ha checked");
});
