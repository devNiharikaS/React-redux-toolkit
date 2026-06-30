import { useDispatch, useSelector } from "react-redux"
import images from "./assets/constansts/imges"
import { additem,removeItem} from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from './redux/productSlice'
const Product = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())

    }, []
    )
    const productSelector = useSelector((state) => state.products?.items || [])

     const cartSelector = useSelector((state)=>state.cart.items);
    console.log(cartSelector.length);

    return (
        <div className="grid">
            {
                productSelector.length>0  && productSelector.map((item) => (
                    <div key={item.id} className="card">
                        <img src={item.thumbnail} />
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="brand">{item.brand}</div>
                            <div className="prize">{item.prize}</div>
                            <div className="rating">{item.rating}</div>
                            {
                                cartSelector.find(cartItem=>cartItem.id == item.id)?
                                 <button onClick={()=>dispatch(removeItem(item))} className="btn remove-button">Remove from cart</button>
                            :
                            <button onClick={()=>dispatch(additem(item))} className="btn">Add to cart</button>
                        
                                }
                                    </div>

                    </div>
                ))
            }
        </div>


    )
}
export default Product