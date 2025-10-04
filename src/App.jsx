import React from "react"

// import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from "./components/header/TopNav"
import BottomNav from "./components/header/BottomNav"
import Home from "./pages/Home/Home"
import { Route, Routes } from "react-router-dom"
import ProductDetails from "./pages/productsdetails/ProductDetails"
import Cart from "./pages/Cart/Cart"
import { Toaster } from "react-hot-toast"
import ScrollTop from "./components/ScrollTop"
import { AnimatePresence } from "framer-motion"
import CategoryPage from "./pages/CategoryPage/CategoryPage"
import Search from "./pages/Search/Search"
import Favorites from "./pages/Favorites/Favorites"
import All_Products from "./pages/Products/All_Products"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import PageNotFound from "./pages/Pagenotfound/PageNotFound"



function App() {



  return (
    <>
      <header>
        <TopNav />
        <BottomNav />
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#e9e9e9',
            borderRadius: '5px',
            padding: '14px'
          }
        }}
      />
      <ScrollTop />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all_products" element={<All_Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} /> 
          <Route path="/search" element={<Search />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/products/*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>

    </>
  )
}

export default App
