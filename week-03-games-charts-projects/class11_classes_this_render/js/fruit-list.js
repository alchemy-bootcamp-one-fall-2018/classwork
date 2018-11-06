import html from './html.js';
import FruitCard from './fruit-card.js';

function makeTemplate() {
    return html`
        <ul class="fruits"></ul>
    `;
}

class FruitList {
    constructor(fruits, cart, onSelect, onOrder) {
        this.fruits = fruits;
        this.cart = cart;
        this.onSelect = onSelect;
        this.onOrder = onOrder;
    }

    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');

        for(let i = 0; i < this.fruits.length; i++) {
            this.add(this.fruits[i]);
        }

        return dom;
    }

    add(fruit) {
        const fruitCard = new FruitCard(fruit, this.cart, this.onSelect, this.onOrder);
        // append to <ul>, this will empty the fragment
        this.list.appendChild(fruitCard.render());
    }
}

export default FruitList;