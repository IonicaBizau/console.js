## Documentation

You can see below the API reference of this module.

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

