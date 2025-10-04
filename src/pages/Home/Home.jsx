import { useEffect, useState } from 'react'
import HeroSlider from '../../components/HeroSlider'
import "./home.css"
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
]




function Home() {

const [products , setProducts] = useState({})

const [loading , setLoading] = useState(true)

  useEffect(() => {
    const fetchproducts = async () => {
      try{
        const results = await Promise.all(
          categories.map(async(category) =>{
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            return{[category]: data.products}
          })
        )

        const ProductsData = Object.assign({}, ...results);
        setProducts(ProductsData)

      }catch (error){
        console.error("Error fetching" , error);        
      }finally{
        setLoading(false)
      }
    }

    fetchproducts()
  }, [])
  
  
  
  return (
    <>
   <PageTransition>
     <div>
        <HeroSlider/>

      {loading ? (
         categories.map((category) =>(
          <SlideProductsLoading key={category}/>
          ))
        ) : (
          
          categories.map((category) =>(
          <SlideProducts key={category} data={products[category]} title ={category.replace("-" , " ")} />
        ))
      ) }
    </div>
   </PageTransition>
   <Footer/>
   </>
  )
}

export default Home 