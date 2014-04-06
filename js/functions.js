/*
 *  Console.js Demo functions.js
 *
 *  This file contains custom functions for demo
 *  page of console.js library
 *
 * */
$(document).ready(function () {

    // create an animation
    $(".container").css("opacity", "0").animate({
        opacity: 1
      , top: "30%"
    }, 1000);

    // init console js
    ConsoleJs.init({
        selector: "pre.console",
        input: "textarea.js-code-to-run"
    });

    console.log("> Welcome to console.js JavaScript library!");
});
