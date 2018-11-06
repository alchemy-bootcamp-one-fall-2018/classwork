import html from './html.js';

function makeTemplate(item) {
    return html`
        <tr class="cart-item">
            <td class="name-cell">${item.name}</td>
            <td class="quantity-cell">${item.quantity}</td>
            <td class="price-cell">$${item.price.toFixed(2)}</td>
            <td class="total-cell">$${(item.quantity * item.price).toFixed(2)}</td>
        </tr>
    `;
}

class CartItem {
    constructor(item, fruit) {
        this.item = item;
        this.fruit = fruit;
    }

    render() {
        const dom = makeTemplate(this.item, this.fruit);
        return dom;
    }
}

export default CartItem;