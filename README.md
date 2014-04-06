console.js
==========

A JavaScript library that overrides the console object bringing its functionality in a DOM element.

> [![](http://i.imgur.com/PmkC20x.gif)](http://ionicabizau.github.io/console.js/)
> http://ionicabizau.github.io/console.js/

## Example

```js
// init console js
ConsoleJs.init({
    selector: "pre.console",
    input: "textarea.js-code-to-run"
});
```

## Methods

### `init (options)`
Inits the `console.js` plugin for selected DOM elements.

Arguments

 - `options`: object containing the following fields:
   - `selector` (required): the selector to select the DOM elements
   - `input`: the input element selector
    **Note**: When this is provided and the DOM element exists, you can go back and next in the history by pressing <kbd>CTRL<kbd> + <kbd>↑</kbd> and <kbd>CTRL<kbd> + <kbd>↓</kbd>. Also, use <kbd>SHIFT</kbd> + <kbd>Enter</kbd> when you want to input more lines.

### `history.back()`
Goes back in the history. Returns the code that was run at that moment.

### `history.next()`
Goes next in the history. Returns the code that was run at that moment.

## Implemented methods

Right now, the following methods are implemented:

 - log
 - info
 - warn
 - error
 - dir

## License
See LICENSE file.
