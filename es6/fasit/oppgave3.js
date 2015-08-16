"use strict";

//Ta utgangspunkt i bil-prototypeoppgaven og lag en klasse Car med en konstruktør som tar inn biltypenavn, og en funksjon honk som returnerer navnet på bilen etterfølgt av honk honk!
//Lag deretter to nye klasser honda og tesla som extender Car. Teslaer sier dessverre ingenting annet enn navnet sitt.


class Car {
    constructor (name) {
        this.name = name;
    };

    honk() {
        return this.name + "honk honk!";
    }
}

class BMW extends Car {
    honk() {
       return super.honk();
    }
}

class Tesla extends Car {
    honk() {
        return this.name;
    }
}

test("Toyota", function() {
    let tesla = new Tesla("tesla");
    ok(tesla.honk(), "tesla");

    let bmw = new BMW("bmw");
    ok(bmw.honk(), "bmw honk honk!");
});

