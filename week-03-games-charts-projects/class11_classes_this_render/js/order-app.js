import html from './html.js';
import cartApi from './cart-api.js';
import fruitsApi from './fruits-api.js';
import Header from './header.js';
import FruitList from './fruit-list.js';
import ShoppingCart from './shopping-cart.js';

const fruits = fruitsApi.getAll();
const cart = cartApi.get();

function makeTemplate() {
    return html`
        <header></header>

        <main>   
            
            <section class="shopping-cart-section secondary">
                <h2>Shopping Cart</h2>
                <div class="cart-container"></div>
                <div>
                    <a href="./checkout.html" class="checkout action">Checkout</a>
                </div>
            </section>
            
            <section class="product-list-section">
                <h2>Select Fruits to Purchase</h2>
            </section>

        </main>`;
}

class OrderApp {
    render() {
        const dom = makeTemplate();

        const headerSection = dom.querySelector('header');
        const cartContainer = dom.querySelector('.cart-container');
        const productSection = dom.querySelector('.product-list-section');

        const header = new Header();
        headerSection.appendChild(header.render());

        const shoppingCart = new ShoppingCart(cart);
        cartContainer.appendChild(shoppingCart.render());
        
        const fruitList = new FruitList(fruits, null, (fruit, quantity) => {
            cartApi.order(fruit, quantity);
            shoppingCart.update(cart);
        });
        productSection.appendChild(fruitList.render());

        return dom;
    }
}

const orderApp = new OrderApp();
document.getElementById('root').appendChild(orderApp.render());
