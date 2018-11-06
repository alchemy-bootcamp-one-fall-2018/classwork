
let orders = [];

function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

const ordersApi = {
    getAll() {
        const json = localStorage.getItem('orders');
        if(json) {
            orders = JSON.parse(json);
        }        
        return orders;
    },
    add(order) {
        orders.push(order);
        saveOrders();
    }
};


ordersApi.getAll();

export default ordersApi;