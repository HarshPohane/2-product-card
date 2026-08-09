import Product from './component/Product.jsx';
import Products from './data.json';

function App() {
    return (
        <div className="container">
            {Products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
}

export default App;
