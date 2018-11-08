import html from '../html.js';
import userApi from '../user-api.js';
import Header from '../header.js';
import SignIn from './sign-in.js';

function makeTemplate() {
    return html`
        <header></header>

        <main>
            <section class="sign-in-section">
                <h2>Sign In</h2>
                <p>Choose your user name and difficulty!</p>
            </section>
        </main>
    `;
}

export default class App {
    constructor() {
        // this.user = userApi.get();
    }

    render() {
        const dom = makeTemplate();

        // header
        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        // sign-in
        const signInSection = dom.querySelector('.sign-in-section');
        const signIn = new SignIn(user => {
            user.rounds = [];
            userApi.signIn(user);
            window.location = 'game.html';
        });
        signInSection.appendChild(signIn.render());

        return dom;
    }
}