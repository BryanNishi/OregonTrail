$(document).ready(function restart() {
    var players = [
        playerOne = {
            name: "",
            age: 0,
            health: 100,
            sick: false,
            morale: 100
        },
        playerTwo = {
            name: "",
            age: 0,
            health: 100,
            sick: false,
            morale: 100
        },
        playerThree = {
            name: "",
            age: 0,
            health: 100,
            sick: false,
            morale: 100
        },
        playerFour = {
            name: "",
            age: 0,
            health: 100,
            sick: false,
            morale: 100
        },
        playerFive = {
            name: "",
            age: 0,
            health: 100,
            sick: false,
            morale: 100
        }
    ];

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

    $("#player_names").hide();
    $("#prof").hide();
});

var weather = "";
var events = Math.random;
var riverCross = "";
var sickness = "";
var trades = "";


document.onkeyup = function (e) {
    if (e.which == 32) {
        start();
    }
};

function start() {
    $("#start").hide();
    $("#player_names").show();
};

$("#players_submit").click(function () {
    event.preventDefault();
    $("#player_names").hide();
    $("#prof").show();
});

$("#prof_select").click(function () {
    event.preventDefault();
    $("#prof").hide();
});