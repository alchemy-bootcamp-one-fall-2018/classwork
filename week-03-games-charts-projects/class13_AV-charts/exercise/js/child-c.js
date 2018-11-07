import html from './html.js';

function makeTemplate(name) {
    return html`
        <div class="child-c">
            <img src="assets/logo.png">
            Child C: ${name}
        </div>
    `;
}

export default class ChildC {
    constructor(name) {
        this.name = name;
    }

    render() {
        return makeTemplate(this.name);
    }
}