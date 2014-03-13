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
                if (["log", "info", "warn", "error" ].indexOf(m) !== -1) {

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

                        // each argument
                        for (var i = 0; i < arguments.length; ++i) {
                            htmlToSet += JSON.stringify(arguments[i]) + " ";
                        }

                        // append the line separator
                        htmlToSet += lineSeparator;

                        // set the new html
                        cEl.innerHTML = htmlToSet;
                    }
                }


                // call the old method
                // OldConsole[m].apply(window, arguments);
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
        }

        // here we will save the DOM where console output is shown
      , _els: []
    };

    // export it
    window.ConsoleJs = ConsoleJs;
})(window);
