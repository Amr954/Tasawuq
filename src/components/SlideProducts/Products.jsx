import { useContext, useState } from 'react'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart, FaShare, FaCartArrowDown } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

import { FaCheck } from "react-icons/fa";
import toast from 'react-hot-toast';



function Products({ item }) {

    const navigate = useNavigate()

    const { cartitems, add_to_cart, add_to_favorites,removefromFav, favorites } = useContext(CartContext)
    const isinCart = cartitems.some(i => i.id === item.id)


    const handleAddToCart = () => {
        // Add your cart logic here
        add_to_cart(item)

        toast.success(
            <div className="toast-wrapper">
                <img src={item.images[0]} alt={item.title} className='toast-img' />

                <div className="toast-content">
                    <strong>{item.title}</strong>
                    added To Cart
                    <div>
                        <button className='btn' onClick={() => navigate('/cart')}>View Cart</button>
                    </div>
                </div>
            </div>
            , { duration: 3500 }
        )
    };

    const isinFavorite = favorites.some(i => i.id === item.id)

    const handleAddToFavorites = () => {
        if (isinFavorite) {
            removefromFav(item.id)
            toast.error(`${item.title} Removed from favorites`)
        } else {
            add_to_favorites(item)
            toast.success(`${item.title} Added to favorites`)
        }
    };

    return (
        <div className={`product ${isinCart ? 'in-cart' : ''}`}>
            <Link to={`/products/${item.id}`}>

                <span className='status-cart'><FaCheck />incart</span>
                <div className="img-product">
                    <img src={item.images[0]} alt={item.title} />
                </div>
            </Link>
            <p className="name-product">{item.title}</p>
            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
            </div>


            <p className="price"> <span>${item.price}</span></p>
            <div className="icons">
                <span className='add-btn' onClick={handleAddToCart}><FaCartArrowDown /></span>
                <span className={`${isinFavorite ? 'in-fav' : ''}`} onClick={handleAddToFavorites}><FaRegHeart /></span>
                <span><FaShare /></span>
            </div>
            {/* <div className="btnn">
                <button className='add-btn'>
                    {isinCart ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div> */}


        </div>
    )
}

export default Products