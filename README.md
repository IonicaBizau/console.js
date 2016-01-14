# console.js [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/consolejs.svg)](https://www.npmjs.com/package/consolejs) [![Downloads](https://img.shields.io/npm/dt/consolejs.svg)](https://www.npmjs.com/package/consolejs) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> JavaScript library that overrides the console object bringing its functionality in a DOM element.

[![consolejs](http://i.imgur.com/PmkC20x.gif)](http://ionicabizau.github.io/console.js/)

## Usage & Example

Copy the library file (located in `lib` directory) into your app and include it into the webpage:

```html
<script src="path/to/console.min.js"></script>
```

This creates the `ConsoleJS` global. To initialize the console do:

```js
ConsoleJS.init({
   selector: "pre.console"
   // This is optional. Provide it if you want
   // the user to run custom stuff, otherwise the
   // ConsoleJS will run in the readonly mode.
, input: "textarea.js-code-to-run"
});
```

## Documentation

### `ConsoleJS.init(options)`
Adds a new element where the console will show the output.

#### Params
- **Object** `options`: The DOM element (or query selector) or an object containing the following fields:

 - selector (String|HTMLElement): The DOM element or query selector.
 - input (String|HTMLElement): The DOM element or query selector. This
   is the element where the user inputs the code (could be a `textarea`,
   `input` or so).

### `ConsoleJS.back()`
Goes back in the history.

#### Return
- **Object** An object containing the `command` field.

### `ConsoleJS.next()`
Goes to the next command in the history.

#### Return
- **Object** An object containing the `command` field.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md