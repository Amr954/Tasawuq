import React, { useEffect, useState } from 'react'

import PageTransition from '../../components/PageTransition'
import Footer from '../../components/Footer'
import SlideProducts from '../../components/SlideProducts/SlideProducts'
import SlideProductsLoading from '../../components/SlideProducts/SlideProductsLoading'

const categories = [
    "smartphones",
    "mobile-accessories",
    "laptops",
    "mens-watches",
    "sports-accessories",
    "womens-jewellery",
    "skin-care"
]


function All_Products() {
    const [allproducts, setAllProducts] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchproducts = async () => {
            try {
                const results = await Promise.all(
                    categories.map(async (category) => {
                        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
                        const data = await res.json();
                        return { [category]: data.products }
                    })
                )

                const ProductsData = Object.assign({}, ...results);
                setAllProducts(ProductsData)

            } catch (error) {
                console.error("Error fetching", error);
            } finally {
                setLoading(false)
            }
        }

        fetchproducts()
    }, [])



    return (
        <>
            <PageTransition>
                <div>
                    <h2 className='products-header'>Latest Products</h2>
                    <p className='under-line'></p>
                    {loading ? (
                        categories.map((category) => (
                            <SlideProductsLoading key={category} />
                        ))
                    ) : (

                        categories.map((category) => (
                            <SlideProducts key={category} data={allproducts[category]} title={category.replace("-", " ")} />
                        ))
                    )}
                </div>
            </PageTransition>
            <Footer />
        </>
    )

}

export default All_Products