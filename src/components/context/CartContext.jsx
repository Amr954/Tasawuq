import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()


export default function CartProvider({ children}) {

    ///////////////////// FAVORITIES ////////////////////////
    const [favorites, setFavorites] = useState(() => {
        const saveFavorites = localStorage.getItem('favorites');
        return saveFavorites ? JSON.parse(saveFavorites) : []
    })

    // removefromfavorities
    // const removefromCart = (id) => {
    //     setFavoritiesItems(prevItems => prevItems.filter(item => item.id !== id))
    // }
    // add to favorities
    const add_to_favorites = (item) => {
        setFavorites((prev) => {
            if(prev.some((i) => i.id === item.id)) return prev;
            return [...prev , item]
        })
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])


    // removefromFav
    const removefromFav = (id) => {
        setFavorites(prevItems => prevItems.filter(item => item.id !== id))
    }

    ///////////////////// CART ////////////////////////
    const [cartitems, setCartItems] = useState(() => {
        const saveCart = localStorage.getItem('cartitems');
        return saveCart ? JSON.parse(saveCart) : []
    })

    // increaseqty
    const increaseqty = (id) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ))
    }
    // decreaseqty
    const decreaseqty = (id) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ))
    }

    // removefromCart
    const removefromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    // add to Cart
    const add_to_cart = (item) => {
        setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }])
    }

    useEffect(() => {
        localStorage.setItem('cartitems', JSON.stringify(cartitems))
    }, [cartitems])

    return (
        <CartContext.Provider value={{ cartitems, add_to_cart, increaseqty, decreaseqty, removefromCart, add_to_favorites, removefromFav , favorites}}>
            {children}
        </CartContext.Provider>
    )
}
