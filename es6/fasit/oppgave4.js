let KonsertService = function () {
    let konsertTidspunkt = ["22.00", "23.00"];

    let konserter = [
        {navn: "Kygo", tid: "22.00", scene: "Amfiet"},
        {navn: "Lars Vaular", tid: "23.00", scene: "Sirkus"}
    ];


    return {
        konsertMelding(konsert) {
            return `Kveldens artist er:
                ${konsert.navn}
                Spiller på scene
                ${konsert.scene} kl ${konsert.tid}`;
        },
        delRegning(belop = 0, antall = 1) {
            return belop / antall;
        },
        erKonsertTidspunkt(etTidspunkt) {
            //return konsertTidspunkt.find(tidspunkt => tidspunkt === etTidspunkt);
            return konsertTidspunkt.filter(tidspunkt => tidspunkt === etTidspunkt);
        },
        finnKonsert(artistNavn) {
            return konserter.filter(konsert => konsert.navn === artistNavn);
        }
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