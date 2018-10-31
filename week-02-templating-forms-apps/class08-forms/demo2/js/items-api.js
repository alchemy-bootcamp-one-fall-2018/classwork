
let items = [];

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

const itemsApi = {
    add(item) {
        // 1. add to our array
        items.push(item);
        // 2. save array to localStorage
        saveItems();
    }
};

export default itemsApi;