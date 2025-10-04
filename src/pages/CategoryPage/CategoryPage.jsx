import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './category.css'
import PageTransition from '../../components/PageTransition'
import SlideProductsLoading from '../../components/SlideProducts/SlideProductsLoading'
import Products from '../../components/SlideProducts/Products'
function CategoryPage() {

    const {category} = useParams()
    const [categoryitems , setCategoryItems] = useState([])
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
            setCategoryItems(data)
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [category])

    console.log(categoryitems);
    
  return (
    <PageTransition key={category}>
        <div className='category_products'>

        {loading ? <SlideProductsLoading key={category}/> :
        
        <div className="container">
            <div className="top-slide">
                <h2>{category} : {categoryitems.limit}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, commodi!</p>
            </div>
            <div className="products">
                {categoryitems.products.map((item , index) => (
                    <Products item={item} key={index}/>
                ))}
            </div>
        </div>
        
        }

        
    </div>
    </PageTransition>
  )
}

export default CategoryPage