import html from '../html.js';
import userApi from '../user-api.js';

function makeTemplate() {
    return html`
        <header>
            <div>
                <img class="logo" src="assets/logo.png">
                <h1>Alchemy Games</h1>
            </div>
            <nav>
            </nav>
        </header>

        <main>
        </main>
    `;
}

export default class App {
    constructor() {
        this.user = userApi.get();
    }

    render() {
        let dom = makeTemplate();
        return dom;
    }
}