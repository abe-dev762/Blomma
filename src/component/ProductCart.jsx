import React from "react"
import { TiShoppingCart } from "react-icons/ti"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../stores/CartSlice"
import { products } from "../product"


const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    const {name, price, image, slug} = props.data;
    const dispatch = useDispatch();
    
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }
    return (
        <>
         {products.map((category, index) => (
            <div key={index}>
                <h1>
                    <div>{category.category}</div>
                </h1>
                <div>
                    {category.product.map((product, productIndex) => (
                        <div key={productIndex}>
                            <img
                            src={image}
                            alt={name}/>
                            <h3>{name}</h3>
                            <div>
                                <p><span>{price}</span></p>
                                <button>
                                    <TiShoppingCart/>Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
         ))}
        </>
        
    )

}

export default ProductCart