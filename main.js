//Time vars
var min = "0" + 0,
    sec = "0" + 0,
    cen = "0" + 0;

//Timer
function timer() {
    cen++;

    if (cen < 10) cen = "0" + cen;

    if (cen >= 100) {
        sec++;
        cen = "0" + 0;
        if (sec < 10) sec = "0" + sec;
    }

    if (sec >= 60) {
        min++;
        sec = "0" + 0;
        if (min < 10) min = "0" + min;
    }

    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + cen;
}

//Interval var
var intv;

//Time Start
function start() {
    intv = setInterval("timer()", 10);
    document.getElementById("start").style.display = "none";
    document.getElementById("stop").style.display = "initial";
}

//Time Stop
function stop() {
    clearInterval(intv);
    document.getElementById("start").style.display = "initial";
    document.getElementById("stop").style.display = "none";
}

//Time Reset
function reset() {
    min = "0" + 0;
    sec = "0" + 0;
    cen = "0" + 0;
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + cen;
}

//Get a New Saveslot
function getslot(ns) {
    slot.style.opacity = .5;
    slot = ns;
    slot.style.opacity = .7;
}

//Save Current Time
function save() {
    slot.innerHTML = document.getElementById("timer").innerHTML;
}

//Random Color Generator
function rcg() {
    var r = Math.round(Math.random() * (255 - 75)) + 75,
        g = Math.round(Math.random() * (255 - 75)) + 75,
        b = Math.round(Math.random() * (255 - 75)) + 75;

    document.getElementById("container").style.background = "rgb(" + r + "," + g + "," + b + ")";

    var hexr = Number(r).toString(16),
        hexg = Number(g).toString(16),
        hexb = Number(b).toString(16);

    if (hexr.length < 2) hexr = "0" + hexr;
    if (hexg.length < 2) hexg = "0" + hexg;
    if (hexb.length < 2) hexb = "0" + hexb;

    document.getElementById("rgb").innerHTML = "#" + hexr + hexg + hexb;

    r -= 25;
    g -= 25;
    b -= 25;
    document.getElementsByTagName("body")[0].style.background = "rgb(" + r + "," + g + "," + b + ")";

}
