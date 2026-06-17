import Cart from "../cart"
const Header = () => {
    return (
        <header>
    <div className="container">
        <div className="logo">
            <h2>ShopMart</h2>
        </div>

        <nav>
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Offers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <Cart/ > 
        </nav>


    </div>
</header>

    )
}
export default Header