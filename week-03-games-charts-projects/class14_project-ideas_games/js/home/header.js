import html from '../html.js';

function makeTemplate() {
    return html`
        <div>
            <img class="logo" src="assets/logo.png">
            <h1>Alchemy Says</h1>
        </div>
        <nav>
        </nav>
    `;
}

export default class Header {
    render() {
        return makeTemplate();
    }
}