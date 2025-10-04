import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './productsinfo.css'
import SlideProducts from '../../components/SlideProducts/SlideProducts';
import ProductsDetailsLoading from './ProductsDetailsLoading';
import Products_images from './Products-images';
import Product_info from './Product_info';
import PageTransition from '../../components/PageTransition';
import SlideProductsLoading from '../../components/SlideProducts/SlideProductsLoading';

function ProductDetails() {




  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const [relatedproducts, setRelatedProducts] = useState([])
  const [loading2, setLoading2] = useState(true)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        setProduct(data)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct()
  }, [id])


  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading2(false))
  }, [product?.category])


  if (!product) return <p>product not found</p>

  return (
    <PageTransition key={id}>
      <div>
        {loading ? (
          <ProductsDetailsLoading />
        ) : (
          <div className='products-info'>
            <div className="container">
              <Products_images product={product} />
              <Product_info product={product} />
            </div>
          </div>
        )}

        {loading2 ? (
          <SlideProductsLoading />
        ) : (
          <SlideProducts key={product.category} title={product.category.replace("-", " ")} data={relatedproducts} />
        )}
      </div>
    </PageTransition>
  )

}



export default ProductDetails