import html from './html.js';
import CartItem from './cart-item.js';

function makeTemplate() {
    return html`
        <table class="shopping-cart">
            <thead>
                <tr class="secondary-inverted">
                    <td class="name-cell">Item</td>
                    <td class="quantity-cell">Quantity</td>
                    <td class="price-cell">Price</td>
                    <td class="total-cell">Total</td>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <td class="name-cell"></td>
                    <td class="quantity-cell"></td>
                    <td class="price-cell">Order Total</td>
                    <td class="total-cell"></td>
                </tr>
            </tfoot>
        </table>
    `;
}

class ShoppingCart {
    constructor(cart) {
        this.cart = cart;
    }

    render() {
        const dom = makeTemplate();
        this.body = dom.querySelector('tbody');
        this.totalCell = dom.querySelector('tfoot .total-cell');
        this.populate();
        return dom;
    }

    populate() {
        let total = 0;

        for(let i = 0; i < this.cart.length; i++) { 
            const item = this.cart[i];
            total += item.quantity * item.price;

            const cartItem = new CartItem(item);
            this.body.appendChild(cartItem.render());
        }

        this.totalCell.textContent = `$${total.toFixed(2)}`;
    }

    update(cart) {
        this.cart = cart;

        while(this.body.lastElementChild) {
            this.body.lastElementChild.remove();
        }

        this.populate();
    }
}

export default ShoppingCart;