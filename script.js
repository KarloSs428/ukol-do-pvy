$(function () {

    let Vypocet = {
        polomer: 5,
        vyska: 1,
        buduPocitat: "objem",
        jednotky: "mm",

        objem: function () {
            return (this.polomer * this.polomer) * this.vyska * 3.14;
        },

        povrch: function () {
            return 2 * (3.14 * (this.polomer * this.polomer)) + 2 * 3.14 * this.polomer * this.vyska;
        }
    }

    var vysledek;

    $("#pocitej").on("click", function () {
        Vypocet.polomer = $("#polomer").val();
        Vypocet.vyska = $("#vyska").val();
        Vypocet.jednotky = $("#jednotky").val();

        if ($("#buduPocitat").val() == "objem") {
            vysledek = "Objem je " + Vypocet.objem() + " " + Vypocet.jednotky + ".";
            console.log(vysledek);
            $("#vysledek").html(vysledek);
        }
        else {
            vysledek = "Povrch je " + Vypocet.povrch() + " " + Vypocet.jednotky + ".";
            console.log(vysledek);
            $("#vysledek").html(vysledek);
        }
    })
});