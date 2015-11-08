# console.js [![Support this project][donate-now]][paypal-donations]
JavaScript library that overrides the console object bringing its functionality in a DOM element.

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

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014
[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md