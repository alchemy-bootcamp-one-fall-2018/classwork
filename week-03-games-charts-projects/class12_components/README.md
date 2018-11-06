Class 12: Components

## Agenda

* Code Review
* Exercise: Diagram Components and Data
* Review New Component Structure
* Demo: Game

## Components

### Minimum

1. File for component, ie `hello-world.js`
1. template function `makeTemplate`
1. `class` definition for component
1. `render` method that returns dom from makeTemplate
1. Associated `css` file

```js
import html from './html.js';

function makeTemplate() {
    return html`
        <h1>Hello World</h1>
    `;
}

class HelloWorld {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

export default HelloWorld;
```

This component could be used like:

```js
import HelloWorld from './hello-world';

const helloWorld = new HelloWorld();
const root = document.getElementById('root');
root.appendChild(helloWorld.render());
```

### Props (Data and Callbacks)

Data and callbacks needed from the parent are passed into the constructor
and stored on `this`. You can calculate derived data in the constructor if it will not need to be recalculated for the life of the component.

### Reference and setup DOM in `render()`

During the render method, reference any elements your component will need by using `dom.querySelector(<selector>)`

* Use variables if only need during render (event listeners)
* Store on `this` if you will need to access that element later

### Add additional methods

Depending on the makeup and jobs of your component, implement supplemental workflows to adjust the state of the component to accurately reflect the data changes in the view for which the component is responsible.

## Exercise

1. Draw Page Wire frame Diagram
1. Decompose into components (right balance is jobs, not elements)
1. Transfer to Tree Diagram
1. For each component, identify 
    1. What data it needs
    1. What events it offers (callbacks)

* Guess-or-Hang (Hangperson)
* Tic-tac-toe vs Computer
* Whack-a-mole
* Slot Machine
* Black Jack vs Computer
* Dots
* War (card game)