import { useDispatch } from "react-redux"
import images from "./assets/constansts/imges"
import { additem, removeitem } from "./redux/slice";
const Product = () => {
    const dispatch = useDispatch; { }
    return (
        <div class="product-card">
            <div class="product-image">
                <img src={images.mouse} alt="Product Image" />
            </div>

            <div class="product-details">
                <h2>Wireless Bluetooth Headphones</h2>

                <p class="brand">Brand: Sony</p>

                <p class="description">
                    High-quality wireless headphones with noise cancellation,
                    30-hour battery life, and premium sound quality.
                </p>

                <div class="price-section">
                    <span class="current-price">₹4,999</span>
                    <span class="old-price">₹6,999</span>
                </div>

                <p class="rating">⭐⭐⭐⭐☆ (4.5/5)</p>

                <button onClick = {() => dispatch(additem(1))} className="btn">Add to Cart</button>
                <button onClick = {() => dispatch(removeitem(1))} className="btn"remove-button>Remove from Cart</button>
            </div>
        </div>


    )
}
export default Product