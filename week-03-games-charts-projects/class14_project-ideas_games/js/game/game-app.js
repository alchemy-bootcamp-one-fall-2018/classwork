import html from '../html.js';
import userApi from '../user-api.js';
import Header from '../header.js';
import Player from './player.js';
import Recorder from './recorder.js';

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
        const main = dom.querySelector('main');
        // const player = new Player([0, 0, 1, 3], () => {
        //     console.log('played');
        // });
        // main.appendChild(player.render());

        const recorder = new Recorder([0, 0, 1, 3], wasCorrect => {
            console.log('correct?', wasCorrect);
        });
        main.appendChild(recorder.render());

        return dom;
    }
}