
let cart = [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const cartApi = {
    get() {
        const json = localStorage.getItem('cart');
        if(json) {
            cart = JSON.parse(json);
        }        
        return cart;
    },
    order(fruit, quantity) {
        const index = cart.findIndex(item => item.name === fruit.name);

        const orderItem = cart[index];

        if(orderItem) {
            orderItem.quantity += quantity;
            if(orderItem.quantity <= 0) {
                cart.splice(index, 1);
            }
        }
        else if(quantity > 0) {
            cart.push({
                name: fruit.name,
                price: fruit.price,
                quantity: quantity
            });
        }

        saveCart();
    },
    clear() {
        cart = [];
        saveCart();
    }
};

export default cartApi;