import html from './html.js';
import ordersApi from './orders-api.js';
import cartApi from './cart-api.js';
import Header from './header.js';
import ShoppingCart from './shopping-cart.js';
import CustomerForm from './customer-form.js';

const cart = cartApi.get();

function makeTemplate() {
    return html`
        <header></header>

        <main>
            <section class="shopping-cart-section secondary">
                <h2>Review Order</h2>
            </section>
            
            <section class="customer-section">
                <h2>Your Info</h2>
            </section>            
        </main>`;
}

class CheckoutApp {
    render() {
        const dom = makeTemplate();

        const headerSection = dom.querySelector('header');
        const cartSection = dom.querySelector('.shopping-cart-section');
        const customerSection = dom.querySelector('.customer-section');

        const header = new Header();
        headerSection.appendChild(header.render());


        const shoppingCart = new ShoppingCart(cart);
        cartSection.appendChild(shoppingCart.render());
        

        const customerForm = new CustomerForm(customer => {
            const order = {
                customer: customer,
                products: cart
            };
            ordersApi.add(order);
            cartApi.clear();
            window.location = './confirmation.html';
        });
        customerSection.appendChild(customerForm.render());


        return dom;
    }
}

const checkoutApp = new CheckoutApp();
const root = document.getElementById('root');
root.appendChild(checkoutApp.render());
