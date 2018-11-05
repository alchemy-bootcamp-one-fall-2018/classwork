import cartApi from './cart-api.js';
import fruitsApi from './fruits-api.js';
import FruitList from './fruit-list.js';
import ShoppingCart from './shopping-cart.js';

const fruits = fruitsApi.getAll();
const cart = cartApi.get();

const shoppingCart = new ShoppingCart(cart, fruits);

const fruitList = new FruitList(fruits, null, (fruit, quantity) => {
    cartApi.order(fruit, quantity);
    shoppingCart.update(cart);
});
const listSection = document.getElementById('fruit-list');
listSection.appendChild(fruitList.render());
