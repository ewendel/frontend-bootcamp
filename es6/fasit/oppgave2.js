"use strict";
//Lag en klasse Sirkel med en konstruktør som tar inn radius. Deretter lag en getter kalt areal som returnerer resultatet av funksjonen kalkAreal som du også må lage.
//Skriv en test for å sjekke at arealet blir riktig regnet ut

class Sirkel {
    constructor(radius) {
        this.radius = radius;
    }

    get areal() {
        return this.kalkAreal()
    }

    kalkAreal() {
        return this.radius * this.radius*Math.PI;
    }
}

test("SirkelAreal", function() {
    let sirkel = new Sirkel(3);
    ok(sirkel.areal, 3*3*Math.PI);
});
