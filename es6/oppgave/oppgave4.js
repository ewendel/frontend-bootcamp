"use strict";

//Ta utgangspunkt i koden under og gjør den om til ES6.
//For å transpile ned til ES5 kan du bruke jsbin http://jsbin.com/tutevo/1/edit?html,js,output da nettleserene støtter ikke ES6 så veldig bra atm.

var KonsertService = function () {
    var konserter = [
        {navn: "Kygo", tid: "22.00", scene: "Amfiet"},
        {navn: "Lars Vaular", tid: "23.00", scene: "Sirkus"}
    ];

    var konsertTidspunkt = ["22.00", "23.00"];

    var erKonsertTidspunkt = function (etTidspunkt) {
        return konsertTidspunkt.filter(function (tidspunkt) {
            return etTidspunkt === tidspunkt;
        });
    };

    var delRegning = function (belop, antall) {
        if (antall && belop) {
            return belop / antall;
        } else if(belop) {
            return belop;
        } else {
            return 0;
        }
    };

    var finnKonsert = function (artistNavn) {
        return konserter.filter(function (konsert) {
            return konsert.navn === artistNavn;
        });
    };

    return {
        konsertMelding: function (konsert) {
            return "Kveldens artist er:\n" +
            konsert.navn + "\n" +
            "Spiller på scene:\n" +
            konsert.scene + " kl " + konsert.tid;

        },
        delRegning: delRegning,
        erKonsertTidspunkt: erKonsertTidspunkt,
        finnKonsert: finnKonsert
    }
};


test("Konsert", function() {
    equal(KonsertService().konsertMelding({navn: "test", tid: "21.00", scene: "scence1"}), "Kveldens artist er:\ntest\nSpiller på scene:\nscence1 kl 21.00");
    equal(KonsertService().delRegning(100, 2), 50);
    equal(KonsertService().delRegning(undefined, 2), 0);
    equal(KonsertService().delRegning(2, undefined), 2);
    equal(KonsertService().delRegning(undefined, undefined), 0);
    ok(KonsertService().erKonsertTidspunkt("19.00"), false);
    ok(KonsertService().erKonsertTidspunkt("22.00"), true);
    deepEqual(KonsertService().finnKonsert("Kygo")[0], {navn: "Kygo", tid: "22.00", scene: "Amfiet"});
});

