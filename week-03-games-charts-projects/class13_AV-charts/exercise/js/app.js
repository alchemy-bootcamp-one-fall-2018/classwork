import html from './html.js';
import Header from './header.js';
import ChildA from './child-a.js';
import ChildB from './child-b.js';

function makeTemplate() {
    return html`
        <div class="app">
            <header></header>

            <main>
                <section>I am text in app component</section>
                <section class="child-a-container"></section>
                <section class="child-b-container"></section>
            </main>
        </div>
    `;
}

export default class App {
    constructor() {
        this.names = ['felix', 'lassie', 'bob'];
        this.user = 'martypdx';
    }

    render() {
        const dom = makeTemplate();

        // append child components:

        const headerContainer = dom.querySelector('header');
        const header = new Header(this.user);
        headerContainer.appendChild(header.render());

        // 1. get ahold of the "target" element
        // (the thing we append to)
        const childAContainer = dom.querySelector('.child-a-container');

        // 2. create a new instance of the child Component
        // ("new" keyword plus "()")
        const childA = new ChildA();

        // 3. call .render() on component instance
        // const childADom = childA.render();
        
        // // 4. append to target
        // childAContainer.appendChild(childADom);

        // Combine steps 3 & 4:
        childAContainer.appendChild(childA.render());

        const childBContainer = dom.querySelector('.child-b-container');
        const childB = new ChildB(this.names);
        childBContainer.appendChild(childB.render());


        return dom;
    }
}
