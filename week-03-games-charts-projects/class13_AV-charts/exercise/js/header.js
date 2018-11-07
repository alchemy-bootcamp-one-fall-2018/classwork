import html from './html.js';

function makeTemplate(user) {
    return html`
        <h1>I am the Header of the App</h1>
        <p>Hello ${user}</p>
    `;
}

export default class Header {
    constructor(user) {
        this.user = user;
    }

    render() {
        return makeTemplate(this.user);
    }
}