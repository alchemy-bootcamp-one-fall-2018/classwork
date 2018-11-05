
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
    add(fruit) {
        const orderItem = cart.find(item => {
            return item.name === fruit.name;
        });

        if(orderItem) {
            orderItem.quantity++;
        }
        else {
            cart.push({
                name: fruit.name,
                quantity: 1
            });
        }

        saveCart();
    }
};

export default cartApi;