import html from '../html.js';
import userApi from '../user-api.js';
import Header from '../header.js';

function makeTemplate() {
    return html`
        <header></header>
        <main></main>
    `;
}

export default class App {
    constructor() {
        this.user = userApi.get();
    }

    render() {
        const dom = makeTemplate();

        // header
        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        // game
        // const main = dom.querySelector('main');

        return dom;
    }
}