import html from './html.js';

function makeItem(item, fruit) {
    return html`
        <li>${item.name} 
            ${item.quantity} * $${fruit.price.toFixed(2)} = 
            <strong>
                $${(item.quantity * fruit.price).toFixed(2)}
            </strong>
        </li>
    `;
}

const list = document.getElementById('cart-list');

class ShoppingCart {
    constructor(cart, fruits) {
        this.fruits = fruits;
        this.populate(cart);
    }

    populate(cart) {
        const fruits = this.fruits;

        let total = 0;

        for(let i = 0; i < cart.length; i++) { 
            const item = cart[i];
            
            const fruit = fruits.find(fruit => fruit.name === item.name);

            total += item.quantity * fruit.price;

            const dom = makeItem(cart[i], fruit);
            list.appendChild(dom);
        }

        const orderTotal = document.createElement('li');
        orderTotal.textContent = `Order Total $${total.toFixed(2)}`;
        list.appendChild(orderTotal);
    }

    update(cart) {
        while(list.lastElementChild) {
            list.lastElementChild.remove();
        }
        this.populate(cart);
    }
};

export default ShoppingCart;