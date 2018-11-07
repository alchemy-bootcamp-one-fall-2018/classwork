import html from './html.js';
import ChildC from './child-c.js';

function makeTemplate() {
    return html`
        <div class="child-b">
            <h4>Child B - I love line breaks</h4>
            <hr>
            <hr>
            <hr>
            <hr>
            <hr>
            <ul class="child-c-list"></ul>
        </div>
    `;
}

export default class ChildB {
    constructor(names) {
        this.names = names;
    }

    render() {
        const dom = makeTemplate();

        const container = dom.querySelector('.child-c-list');

        this.names.forEach(name => {
            const childC = new ChildC(name);
            container.appendChild(childC.render());
        });

        // // does same thing as above:
        // for(let i = 0; i < this.names.length; i++) {
        //     const name = this.names[i];
        //     const childC = new ChildC(name);
        //     container.appendChild(childC.render());
        // }
        
        return dom;
    }
}