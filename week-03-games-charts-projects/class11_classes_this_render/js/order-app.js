import fruitsApi from './fruits-api.js';
import cartApi from './cart-api.js';
import fruitList from './fruit-list.js';
import shoppingCart from './shopping-cart.js';

const fruits = fruitsApi.getAll();
const cart = cartApi.get();

shoppingCart.init(cart);

fruitList.init(fruits, function(fruit) {
    cartApi.add(fruit);
    shoppingCart.update(cart);
});
