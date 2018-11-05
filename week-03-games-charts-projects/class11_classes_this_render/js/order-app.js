import fruitsApi from './fruits-api.js';
import cartApi from './cart-api.js';
import fruitList from './fruit-list.js';
import shoppingCart from './shopping-cart.js';

const fruits = fruitsApi.getAll();
const cart = cartApi.get();

shoppingCart.init(cart, fruits);

fruitList.init(fruits, null, (fruit, quantity) => {
    cartApi.order(fruit, quantity);
    shoppingCart.update(cart);
});
