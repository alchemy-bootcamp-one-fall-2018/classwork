import html from './html.js';

function makeTemplate() {
    return html`
        <div class="child-a">
            <p>I am Child A!</p>
        </div>
    `;
}

export default class ChildA {
    render() {
        return makeTemplate();
    }
}