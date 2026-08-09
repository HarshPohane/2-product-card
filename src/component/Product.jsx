import { useState, useEffect } from 'react';
import './Product.css';

function Product({ name, price, image }) {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);

    useEffect(() => {
        setTotalPrice(quantity * price);
    }, [quantity, price]);

    const increaseQuantity = () => {
        if (quantity >= 9) {
            alert('Quantity cannot be more than 9');
            return;
        }
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity <= 1) {
            alert('Quantity cannot be less than 1');
            return;
        }
        setQuantity(quantity - 1);
    };

    const handleBuyNow = () => {
        alert(
            `Order Placed Successfully!
            Product: ${name}
            Quantity: ${quantity}
            Total Price: ${totalPrice}`
        );
    };

    return (
        <div className="card">
            <img src={image} alt={name} className="product-image" />
            <h2>{name}</h2>
            <p>
                <strong>Price:</strong> ₹{price}
            </p>

            <p>
                <strong>Quantity:</strong> {quantity}
            </p>

            <p>
                <strong>Total Price:</strong> ₹{totalPrice}
            </p>

            <div className="btn-container">
                <button className="qty-btn" onClick={decreaseQuantity}>
                    -
                </button>
                <button className="qty-btn" onClick={increaseQuantity}>
                    +
                </button>
            </div>

            <button className="buy-btn" onClick={handleBuyNow}>
                Buy Now
            </button>
        </div>
    );
}

export default Product;