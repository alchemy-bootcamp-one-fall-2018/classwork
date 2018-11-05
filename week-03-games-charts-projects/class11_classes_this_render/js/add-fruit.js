import html from './html.js';

function makeTemplate() {
    return html`
        <form name="add">
            <label>
                Name:
                <input required name="name">
            </label>
            <label>
                Price:
                <input required name="price" type="number" step="any">
            </label>
            <label>
                Description:
                <input required name="description">
            </label>
            <label>
                Color:
                <input required name="color">
            </label>
            <label>
                Image:
                <input name="image">
            </label>
            <label>
                <button class="action">Add</button>
            </label>
        </form>
    `;
}

class AddFruit {
    // hold onto data and callbacks needed in render and other methods
    constructor(onAdd) {
        this.onAdd = onAdd;
    }

    render() {
        const dom = makeTemplate();

        const form = dom.querySelector('form');

        // "standard" way to add event listeners in JavaScript
        form.addEventListener('submit', event => {
            // prevent form from reloading page
            event.preventDefault();

            // form elements
            const elements = form.elements;

            // get the values from the form controls
            const fruit = {
                name: elements.name.value,
                price: parseFloat(elements.price.value),
                description: elements.description.value,
                color: elements.color.value,
                image: elements.image.value
            };

            this.onAdd(fruit);

            form.reset();
            document.activeElement.blur();
        });

        return dom;
    }
}

export default AddFruit;