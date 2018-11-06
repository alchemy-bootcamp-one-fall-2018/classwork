import html from './html.js';
import OrderRow from './order-row.js';

function makeTemplate() {
    return html`
        <table class="orders-report">
            <thead>
                <tr class="">
                    <td class="name-cell">Name</td>
                    <td class="address-cell">Address</td>
                    <td class="quantity-cell">Quantity</td>
                    <td class="total-cell">Total</td>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `;
}

class OrdersReport {
    constructor(orders, onSelect) {
        this.orders = orders;
        this.onSelect = onSelect;
        this.rows = [];
    }

    render() {
        const dom = makeTemplate();
        this.body = dom.querySelector('tbody');

        this.orders.forEach(order => { 
            const orderRow = new OrderRow(order, selected => {
                this.onSelect(selected);
                this.rows.forEach(row => row.update(selected));
            });
            this.rows.push(orderRow);
            this.body.appendChild(orderRow.render());
        });

        return dom;
    }
}

export default OrdersReport;