import React, { useContext } from 'react'
import { FaRegHeart, FaShare, FaStar } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../components/context/CartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'




function Product_info({ product }) {

    const { cartitems, add_to_cart , favorites , add_to_favorites , removefromFav} = useContext(CartContext)
    const isinCart = cartitems.some(i => i.id === product.id)
    const navigate = useNavigate()

    const handleAddToCart = () => {
        // Add your cart logic here
        add_to_cart(product)

        toast.success(
            <div className="toast-wrapper">
                <img src={product.images[0]} alt={product.title} className='toast-img' />

                <div className="toast-content">
                    <strong>{product.title}</strong>
                    added To Cart
                    <div>
                        <button className='btn' onClick={() => navigate('/cart')}>View Cart</button>
                    </div>
                </div>
            </div>
            , { duration: 3500 }
        )
    };


     const isinFavorite = favorites.some(i => i.id === product.id)

    const handleAddToFavorites = () => {
        if (isinFavorite) {
            removefromFav(product.id)
            toast.error(`${product.title} Removed from favorites`)
        } else {
            add_to_favorites(product)
            toast.success(`${product.title} Added to favorites`)
        }
    };



    return (
        <div className={`imgs-info ${isinCart ? 'item-info' : ''}`}>
            <h2 className='name'>{product.title}</h2>
            <div className="stars">
                <p>
                    {product.rating}{" "}
                    <FaStar />
                </p>
            </div>
            <p className='price'>$ {Math.round(product.price)}</p>

            <h5>Availability: <span>{product.availabilityStatus}</span></h5>
            <h5>Brand: <span>{product.brand}</span></h5>
            <p className='desc'>{product.description}</p>
            <h5 className='stock'>Hurry Up! Only <span>{product.stock}</span> Products Left in Stock</h5>

            <div className="btnn">
                <button className='btn' onClick={handleAddToCart}>
                    {isinCart ? 'Added to Cart' : 'Add to Cart'}<TiShoppingCart />
                </button>
            </div>

            <div className="icons">
                <span className={`${isinFavorite ? 'in-fav' : ''}`} onClick={handleAddToFavorites}><FaRegHeart /></span>
                <span><FaShare /></span>
            </div>
        </div>
    )
}

export default Product_info