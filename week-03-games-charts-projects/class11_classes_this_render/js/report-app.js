import html from './html.js';
import ordersApi from './orders-api.js';
import Header from './header.js';
import OrdersReport from './orders-report.js';
import ShoppingCart from './shopping-cart.js';

const orders = ordersApi.getAll();

function makeTemplate() {
    return html`
        <header></header>

        <main>
            <section class="orders-section">
                <h2>Orders</h2>
            </section> 

            <section class="detail-section secondary">
                <h2>Order Detail</h2>
            </section>
        </main>`;
}

class ReportApp {
    render() {
        const dom = makeTemplate();

        const headerSection = dom.querySelector('header');
        const ordersSection = dom.querySelector('.orders-section');
        const detailSection = dom.querySelector('.detail-section');

        const header = new Header();
        headerSection.appendChild(header.render());

        const ordersReport = new OrdersReport(orders, order => {
            shoppingCart.update(order.products);
        });
        ordersSection.appendChild(ordersReport.render());

        const shoppingCart = new ShoppingCart([]);
        detailSection.appendChild(shoppingCart.render());
    
        return dom;
    }
}

const reportApp = new ReportApp();
const root = document.getElementById('root');
root.appendChild(reportApp.render());
