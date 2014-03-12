(function (window) {

    // save all methods in this object
    var OldConsole = {};

    // each method
    for (var method in console) {

        // save the current method in the OldConsole object
        OldConsole[method] = console[method]

        // replace the old method with a new function
        console[method] = function () {

            // call the old method
            OldConsole[method].apply(window, arguments);
        }
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

            // selector was provided
            if (!options.selector) {

            }
        }

        // here we will save the DOM where console output is shown
      , _els: []
    };

    // export it
    window.ConsoleJs = ConsoleJs;
})(window);
