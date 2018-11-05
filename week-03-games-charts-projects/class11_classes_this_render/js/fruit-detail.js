import html from './html.js';

function makeTemplate() {
    return html`
        <div class="hidden">
            <h2>Name of Fruit</h2>
            <p>description</p>
            <button class="danger">Remove this Fruit</button>
        </div>
    `;
}

class FruitDetail {
    constructor(onRemove) {
        this.onRemove = onRemove;
    }
    
    update(fruit) {
        this.fruit = fruit;

        this.container.classList.remove('hidden');
        this.header.textContent = fruit.name;
        this.description.textContent = fruit.description;
    }
    
    render() {
        const dom = makeTemplate();
        
        this.container = dom.querySelector('div');
        this.header = dom.querySelector('h2');
        this.description = dom.querySelector('p');

        const removeButton = dom.querySelector('button');
        removeButton.addEventListener('click', () => {
            this.onRemove(this.fruit);
            this.fruit = null;
            this.container.classList.add('hidden');
        });

        return dom;
    }
}

export default FruitDetail;