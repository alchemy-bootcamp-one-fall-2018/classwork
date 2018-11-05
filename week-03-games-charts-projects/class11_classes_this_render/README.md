Class 11: `class`, `this`, `render()`

## Agenda

* Feedback & Code Review
* Arrow Functions
* New Component Structure

## Arrow Functions

[reference](arrow-functions.md)

## New Component Structure

* Make more "atomic" and self-contained
* Allow creating more than one

### JavaScript `class`

* Journey from object literal to constructor function to classes
    * Prototypical inheritance explained
* Introducing the `class` keyword
* Naming: Use `TitleCase`
* special `constructor` function
* `class` body contains methods (no commas `,`)

### All about `this`

* When a method is called, refers to the thing to the left of the `.`
* Practically speaking, in classes, use `this` to get or set class properties and to call other class methods

### Add a `render()` method

* Only called once per instance
* Returns its `DOM`
* Parent appends to correct location
* Every component has a template (own `html`)
    * Must use `cloneNode(true)` to create multiple copies!

### Using a bootstrap file

* Creates `App` component and appends to `<div id="root"></div>`