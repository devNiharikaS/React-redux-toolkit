import { useDispatch, useSelector } from "react-redux"
import images from "./assets/constansts/imges"
import { additem, removeitem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from './redux/productSlice'
const Product = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())

    }, []
    )
    const productSelector = useSelector((state) => state.products?.items || [])
    console.log(productSelector);

    return (
        <div className="grid">
            {
                productSelector.length && productSelector.map((item) => (
                    <div key={item.id} className="card">
                        <img src={item.thumbnail} />
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="brand">{item.brand}</div>
                            <div className="prize">{item.prize}</div>
                            <div className="rating">{item.rating}</div>
                            <button className="btn">Add to cart</button>
                        </div>

                    </div>
                ))
            }
        </div>


    )
}
export default Product