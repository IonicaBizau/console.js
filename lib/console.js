/**
 *
 *  Console.js
 *  JavaScript library that overrides the console object bringing its functionality in a DOM element.
 *  https://github.com/IonicaBizau/console.js
 *
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2014 Ionică Bizău
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 * */

(function (window) {

    // save all methods in this object
    var OldConsole = {};

    // each method
    for (var method in console) {

        (function (m) {
            // save the current method in the OldConsole object
            OldConsole[m] = console[m]

            // replace the old method with a new function
            console[m] = function () {

                // one of these methods
                if (["debug", "log", "info", "warn", "error", "dir"].indexOf(m) !== -1) {

                    // each DOM reference where the message must be appended
                    for (var i = 0; i < ConsoleJs._els.length; ++i) {

                        // current element
                        var cEl = ConsoleJs._els[i]

                            // get the element HTML
                          , htmlToSet = cEl.innerHTML

                            // line separator
                          , lineSeparator = "<br />";

                        // pre element
                        if (cEl.tagName === "PRE") {

                            // new line character
                            lineSeparator = "\n";
                        }

                        // add spans with method classes
                        htmlToSet += "<span class=\"" + m + "\">"

                        // each argument
                        for (var i = 0; i < arguments.length; ++i) {
                            htmlToSet += JSON.stringify(arguments[i], null, m === "dir" ? 4 : undefined) + " ";
                        }

                        // close span element
                        htmlToSet += "</span>"

                        // append the line separator
                        htmlToSet += lineSeparator;

                        // set the new html
                        cEl.innerHTML = htmlToSet;
                    }
                }


                // call the old method
                OldConsole[m].apply(console, arguments);
            }
        })(method);
    }

    // the library object
    var ConsoleJs = {

        /*
         *  ConsoleJs#init
         *  Adds a new element where the console will show the output
         *
         *
         *  Arugments
         *      @options: object containing the following fields:
         *          - selector: the selector of the DOM element
         *          - input: the selector of the DOM element where the
         *                   user inputs the code that must be run
         *
         * */
        init: function (options) {

            // set options
            if (!options || options.constructor !== Object) {
                options = {};
            }

            // selector was not provided
            if (!options.selector) {
                throw new Error ("options.selector is required");
            }

            // get all elements
            var newEls = document.querySelectorAll(options.selector);

            // each element
            for (var i = 0; i < newEls.length; ++i) {

                // push the current element
                ConsoleJs._els.push(newEls[i]);
            }

            if (options.input) {

                // TODO Use pure js
                // keyup handler for this textarea
                $(options.input).focus().on("keydown", function (e) {

                    if (e.keyCode === 38 && e.ctrlKey) {
                        $(this).val(ConsoleJs.history.back().command);
                        return;
                    }

                    if (e.keyCode === 40 && e.ctrlKey) {
                        $(this).val(ConsoleJs.history.next().command);
                        return;
                    }

                    // not enter
                    if (e.keyCode !== 13) { return; }
                    if (e.shiftKey) {
                        return;
                    }

                    ConsoleJs._history.push({
                        command: $(this).val()
                      , date:    new Date()
                    });
                    ConsoleJs._current = ConsoleJs._history.length;

                    try {
                        console.log(eval($(this).val()));
                    } catch (e) {
                        console.error(e.message);
                    }
                    $(this).val("");

                    return false;
                });
            }
        }
      , history: {
            back: function () {
                return ConsoleJs._history[--ConsoleJs._current];
            }
          , next: function () {
                return ConsoleJs._history[++ConsoleJs._current];
            }
        }

        // here we will save the DOM where console output is shown
      , _els: []

      , _history: []

      , _current: -1
    };

    // export it
    window.ConsoleJs = ConsoleJs;
})(window);
