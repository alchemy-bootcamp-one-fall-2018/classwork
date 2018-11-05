import fruitApi from './fruits-api.js';
import html from './html.js';
import Header from './header.js';
import AddFruit from './add-fruit.js';
import FruitList from './fruit-list.js';
import FruitDetail from './fruit-detail.js';

const fruits = fruitApi.getAll();

function makeTemplate() {
    return html`
        <header></header>
        
        <main>
            <section id="add-fruit">
                <h2>Add a Fruit</h2>
            </section>
            
            <section id="fruit-list">
                <h2>Fruits</h2>
            </section>

            <section id="fruit-detail"></section>
        </main>
    `;
}

class ProductsApp {
    render() {
        const dom = makeTemplate();
        
        // reference section elements
        const headerSection = dom.querySelector('header');
        const addFruitSection = dom.querySelector('#add-fruit');
        const fruitListSection = dom.querySelector('#fruit-list');
        const fruitDetailSection = dom.querySelector('#fruit-detail');
        
        // header
        const header = new Header();
        headerSection.appendChild(header.render());
        
        // add fruit
        const addFruit = new AddFruit(fruit => {
            // tell the api service first
            fruitApi.add(fruit);
            // then update components
            fruitList.add(fruit);
        });
        addFruitSection.appendChild(addFruit.render());
        
        // fruit list
        const fruitList = new FruitList(fruits, fruit => {
            fruitDetail.update(fruit);
        });
        fruitListSection.appendChild(fruitList.render());
        
        // fruit detail
        const fruitDetail = new FruitDetail(fruit => {
            const index = fruitApi.remove(fruit);
            fruitList.remove(index);
        });
        fruitDetailSection.appendChild(fruitDetail.render());

        return dom;
        
    }
}

const app = new ProductsApp();
document.getElementById('root').appendChild(app.render());

