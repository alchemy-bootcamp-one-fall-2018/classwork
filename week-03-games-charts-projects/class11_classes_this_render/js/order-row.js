import html from './html.js';

function makeTemplate(customer, count, total) {
    return html`
        <tr class="order-row">
            <td class="name-cell">${customer.name}</td>
            <td class="address-cell">${customer.address}</td>
            <td class="quantity-cell">${count}</td>
            <td class="total-cell">$${total.toFixed(2)}</td>
        </tr>
    `;
}

class OrderRow {
    constructor(order, onSelect) {
        this.order = order;
        this.onSelect = onSelect;

        const products = order.products;
        this.count = 0;
        this.total = 0;
        for(let i = 0; i < products.length; i++) {
            const product = products[i];
            this.count += product.quantity;
            this.total += product.quantity * product.price;
        }
    }

    render() {
        const dom = makeTemplate(this.order.customer, this.count, this.total);
        this.row = dom.querySelector('tr');

        this.row.addEventListener('click', () => {
            this.onSelect(this.order);
        });

        return dom;
    }

    update(selected) {
        if(selected === this.order) {
            this.row.classList.add('selected');
        }
        else {
            this.row.classList.remove('selected');
        }
    }
}

export default OrderRow;