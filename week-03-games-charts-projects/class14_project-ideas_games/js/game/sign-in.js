import html from '../html.js';

function makeTemplate() {
    return html`
        <form class="sign-in">
            <p>
                <label for="name">User:</label>
            </p>
            <p>
                <input name="name" 
                    id="name" 
                    placeholder="Your username" 
                    required>
            </p>
            <fieldset>
                <legend>Difficulty:</legend>
                <label>
                    <input name="difficulty" 
                        type="radio" 
                        value="easy" 
                        required
                        checked>
                    Easy
                </label>
                <label>
                    <input name="difficulty" 
                        type="radio" 
                        value="medium"
                        required>
                    Medium
                </label>
                <label>
                    <input name="difficulty" 
                        type="radio" 
                        value="hard"
                        required>
                    Hard
                </label>
            </fieldset>
            <p>
                <button>Play</button>
            </p>
        </form>
    `;
}

export default class SignIn {
    constructor(onSignIn) {
        this.onSignIn = onSignIn;
    }

    render() {
        const dom = makeTemplate();

        const form = dom.querySelector('form');
        const elements = form.elements;

        form.addEventListener('submit', event => {
            event.preventDefault();
            
            const user = {
                name: elements.name.value,
                difficulty: elements.difficulty.value
            };

            this.onSignIn(user);
        });

        return dom;
    }
}