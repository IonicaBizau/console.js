/*
 *  Console.js Demo functions.js
 *
 *  This file contains custom functions for demo
 *  page of console.js library
 *
 * */
window.addEventListener("load", function () {

    // Init console js
    ConsoleJS.init({
        selector: "pre.console",
        input: "textarea.js-code-to-run"
    });

    console.log("> Welcome to console.js JavaScript library!");
});
