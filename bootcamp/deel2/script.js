"use strict";

// Declare variables
var Persoon = "Timo van Elst";
var year = 2018;
var Klas = "MD2A";
var title = "JavaScript Bootcamp " + year;
var Jaarjaar = (new Date()).getFullYear();
var period = getPeriod(2018, Jaarjaar)

// Init
instruction4();
instruction5();


//Instructions

function instruction3() {
    var description = "Donaldus Trumpus pauzeert de game om een kaasrol te eten,"
        + " fdwwf efwf fw f fw fwffww";
    var result = "Yeet Yeet in the Street";

    updateContent("Opdracht 3 - Click Event", description, result);
}

function instruction4() {
    // function instruction2 has been replaced by function instruction4
    document.title = title;
    document.getElementById("pageHeader").innerText = title;

    document.getElementById("Klas").innerText = Klas;

    setValueByClassName("year", year);
    setValueByClassName("Persoon", Persoon);
}

function instruction5() {
    setValueByClassName("period", period);
}

function instruction6() {
    var Jaarjaar = (new Date()).getFullYear();
    var description = "Het jaar maakt niks uit, het leven is onbelangrijk";

    var result = "Huidige jaar: " + Jaarjaar + "<br/>";
    result += "Startjaren: " + "<br/>";
    for (var i = -1; i <= 1; i++) {
        var startYear = Jaarjaar + i;
        var period = getPeriod(startYear, Jaarjaar);
        result += " - " + startYear + ": " + period + "<br/>";
    }

    updateContent("Opdracht 6 - Periode testen", description, result);
}

function instruction7() {
    var description = "Alle dagen zijn kut behalve zaterdag. Kunnen we niet drie zaterdagen hebben?";
    var result = instruction7a() + "<br/>";
    result += instruction7b() + "<br/>";
    result += instruction7c() + "<br/>";
    result += "<hr/>";
    result += "4 zaterdagen zijn vies, eet een banaan.";
    updateContent("Hecc Hecc Hecccccccckk", description, result);
}

function instruction7a() {
    var dayNumber = (new Date()).getDay();
    var day = "";
    if (dayNumber === 0) {
        day = "Zondag";
    }
    else if (dayNumber === 1) {
        day = "Maandag";
    }
    else if (dayNumber === 2) {
        day = "Dinsdag";
    }
    else if (dayNumber === 3) {
        day = "Woensdag";
    }
    else if (dayNumber === 4) {
        day = "Donderdag";
    }
    else if (dayNumber === 5) {
        day = "Vrijdag";
    }
    else if (dayNumber === 6) {
        day = "Zaterdag";
    }

    return "Do you remember, the " + dayNumber + "th/rd of " + day + "'s.";
}

function instruction7b() {
    var dayNumber = (new Date()).getDay();
    var day = "";
    switch (dayNumber) {
        case 0:
            day = "Zondag";
            break;
        case 1:
            day = "Maandag";
            break;
        case 2:
            day = "Dinsdag";
            break;
        case 3:
            day = "Woensdag";
            break;
        case 4:
            day = "Donderdag";
            break;
        case 5:
            day = "Vrijdag";
            break;
        case 6:
            day = "Zaterdag";
            break;
        default:
            day = "Geen dag";
    }

    return "deze dag: " + day + " is kut.";
}

function instruction7c() {
    var dayNumber = (new Date()).getDay();
    var days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
    var day = days[dayNumber];
    return "We gaan allemaal bier drinken op " + day + " , okay?";
}

function instruction8() {
    var description = "Lekkere kazen voor jou en je vriend. 0h wait-";
    var kaas = ["Edammer", " Brie", " Roquefort", " Parmesan", " Geiten kaas"];
    var result = "Kazen: " + kaas + "<br />";
    var sorted = kaas.sort();
    result += "Gesorteerd (A-Z): " + sorted + "<br />";
    var sortedReverse = kaas.reverse();
    result += "Gesorteerd (Z-A): " + sortedReverse + "<br />";
    updateContent("Yummy Yum Yum", description, result);
}



var a = exampleFunction(5, 4);

/**
 * @param {number} a - this is a 1st number value.
 * @param {number} b - this is a 2nd number value.
 * @returns {string} Hello
 */
function exampleFunction(a, b) {
    return 'Hello ' + (a * b);
}

/**
 * @param {string} className
 * @param {number} value
 */
function setValueByClassName(className, value) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = value;
    }
}

function updateContent(header, description, result) {
    document.getElementById("instructionHeader").innerText = header;
    document.getElementById("instructionDescription").innerHTML = description;
    document.getElementById("instructionResult").innerHTML = result;
}


function getPeriod(startYear, Jaarjaar) {
    var result = startYear;
    if (Jaarjaar > startYear) {
        result += "-" + currentYear;
    }
    return result;
}
