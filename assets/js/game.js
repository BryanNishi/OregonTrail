var group = {
    playerOne: "",
    playerTwo: "",
    playerThree: "",
    playerFour: "",
    playerFive: "",
};
var supplies = {
    money: 0,
    oxen: 0,
    food: 0,
    bullets: 0,
    wheels: 0,
    yolks: 0,
    tounges: 0,
    axles: 0
};
var date = "Jan 1st, 1843";
var miles = 0;

var weather = "";
var events=Math.random;
var riverCross = "";
var sickness = "";
var trades = "";

document.onkeyup = function (e) {
    if (e.which == 32) {
      game();
    }
};

function game(){
$("#start").hide();
}