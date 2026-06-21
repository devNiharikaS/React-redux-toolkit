import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
const Cart = () => {
    const cartSelector = useSelector((state)=>state.cart.items);
    console.log(cartSelector.length);
    return (


        <div className="header-icons">
            <ul>
                <li><a href="#">👤</a></li>
                <li className="cart">
                    
                  <Link to="/cart">
                  
                    <span className="cart-count">{cartSelector.length}</span>
                  <div href="#">🛒</div>
                  </Link>

                </li>
                
            </ul>
        </div>
    
       

    );
};
export default Cart;