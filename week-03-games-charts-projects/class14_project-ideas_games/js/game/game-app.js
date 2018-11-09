import html from '../html.js';
import userApi from '../user-api.js';
import makeSequence from './make-sequence.js';
import Header from '../header.js';
import Player from './player.js';
import Recorder from './recorder.js';

function makeTemplate() {
    return html`
        <header></header>
        <main>
            <h2>
                <span class="user"></span>
                -  
                <span class="round"></span>
            </h2>
            <section class="lights-container"></section>
        </main>
    `;
}

export default class App {
    constructor() {
        this.user = userApi.get();
        this.round = 1;
    }

    showSequence() {
        const player = new Player(this.sequence, () => {
            this.clearContainer();
            this.recordSequence();
        });
        this.container.appendChild(player.render());
    }

    recordSequence() {
        const recorder = new Recorder(this.sequence, status => {
            this.clearContainer();
            if(status === 'correct') {
                this.round++;
                this.runRound();
            }
            else {
                this.roundSpan.textContent = `${status.toUpperCase()}! Final Score ${this.round - 1}`;
            }
        });
        this.container.appendChild(recorder.render());
    }

    clearContainer() {
        while(this.container.lastElementChild) {
            this.container.lastElementChild.remove();
        }
    }

    runRound() {
        this.roundSpan.textContent = `Round ${this.round}`;
        this.sequence = makeSequence(this.round);
        this.showSequence();
    }

    render() {
        const dom = makeTemplate();

        // header
        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        const user = dom.querySelector('.user');
        user.textContent = this.user.name;

        this.container = dom.querySelector('.lights-container');
        this.roundSpan = dom.querySelector('.round');    
        this.runRound();

        return dom;
    }
}