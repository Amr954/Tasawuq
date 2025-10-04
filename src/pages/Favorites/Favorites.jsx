import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import PageTransition from '../../components/PageTransition'
import Products from '../../components/SlideProducts/Products'


function Favorites() {
  const { favorites } = useContext(CartContext)
  return (
    <PageTransition key={favorites}>
      <div className='category_products favorites_page'>
        <div className="container">
          <div className="top-slide">
            <h2>Your Favorites</h2>
          </div>
          <div className="products">
            {favorites.length === 0 ? (
              <p>No items in favorites</p>
            ): favorites.map((item , index) => (
                    <Products item={item} key={item.id}/>
                ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Favorites