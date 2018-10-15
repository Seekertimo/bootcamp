var Persoon = "Timo van Elst";
var Jaaryear = 2018;
var group = "MD2A";
var title = "Bootcamp ding " + Jaaryear;

instruction2();

function instruction2() {
    document.title = title;
    document.getElementById("pageHeader").innerText = title;

    document.getElementById("group").innerText = group;

    var elements = document.getElementsByClassName("Jaaryear");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = Jaaryear;
    }

    var elements = document.getElementsByClassName("Persoon");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = Persoon;
    }
}

function instruction3() {
    var description = "Donaldus Trumpus pauseert de game om een kaasrol te eten,"
        + " dhwidhdndnwn djwdwdw w wfwwffwfw  wfwf";

    document.getElementById("instructionHeader").innerText = "Opdracht 3";
    document.getElementById("instructionDescription").innerText = description;
    document.getElementById("instructionResult").innerText = "";
}
