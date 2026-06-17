import { useSelector } from "react-redux"
const Cart = () => {
    const selector = useSelector((state)=>state.cart.value);
    console.log(selector);
    return (


        <div className="header-icons">
            <ul>
                <li><a href="#">👤</a></li>
                <li className="cart">
                    <a href="#">🛒</a>
                    <span className="cart-count">5</span>
                </li>
                <button className="btn">Add to Cart</button>
            </ul>
        </div>
    
       

    );
};
export default Cart;