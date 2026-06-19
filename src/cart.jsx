import { useSelector } from "react-redux"
const Cart = () => {
    const cartSelector = useSelector((state)=>state.cart.items);
    console.log(cartSelector.length);
    return (


        <div className="header-icons">
            <ul>
                <li><a href="#">👤</a></li>
                <li className="cart">
                    <a href="#">🛒</a>
                    <span className="cart-count">{cartSelector.length}</span>
                </li>
                
            </ul>
        </div>
    
       

    );
};
export default Cart;