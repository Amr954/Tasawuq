import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransition from '../../components/PageTransition'
import SlideProductsLoading from '../../components/SlideProducts/SlideProductsLoading'
import Products from '../../components/SlideProducts/Products'


function Search() {
    const [results, setResults] = useState([])
    const query = new URLSearchParams(useLocation().search).get("query")

    const [loading, setLoading] = useState(true)
    console.log(results);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
                const data = await res.json()
                setResults(data.products || [])
            } catch (error) {
                console.log("search error : ", error);
            } finally {
                setLoading(false)
            }

        }

        if (query) fetchResults()
    }, [query])


    return (
        <PageTransition key={query}>
            <div className='category_products'>

                {loading ? (<>Loading...</>) : results.length > 0 ? (

                    <SlideProductsLoading key={query} />
                ) : results.length > 0 ? (
                    <div className="container">
                        <div className="top-slide">
                            <h2>Results for : {query}</h2>
                        </div>
                        <div className="products">
                            {results.map((item, index) => (
                                <Products item={item} key={index} />
                            ))}
                        </div>
                    </div>
                ) : <div className='container'>
                    <p>No Results Found.</p>
                </div>}

            </div>
        </PageTransition>

    )
}

export default Search