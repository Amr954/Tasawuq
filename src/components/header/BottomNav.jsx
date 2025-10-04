import React, { useState, useEffect, useRef } from 'react'
import './header.css'
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";
import Logo from '../../assets/img/logo.png'


const Navlinks = [
  { title: "Home", link: "/" },
  { title: "Products", link: "/all_products" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
]


function BottomNav() {

  const location = useLocation()

  const [categories, setCategories] = useState([])

  const [iscategoryopen, setIscategoryopen] = useState(false)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const categoryRef = useRef(null)

  useEffect(() => {
    setIscategoryopen(false)
    setIsMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [])

  // Close category list when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIscategoryopen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])


  return (

    <div className="btm-header">
      <div className="container">
        <nav className="nav">
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <IoIosMenu /> : <IoIosMenu />}
          </button>

          <div className="category-nav" ref={categoryRef}>
            <div className="category-btn" onClick={() => setIscategoryopen(!iscategoryopen)}>
              <IoIosMenu />
              <p>Browse Category</p>
              <IoIosArrowDown className={`link ${iscategoryopen ? "rotate" : ""}`} />
            </div>

            <div className={`category-nav-list ${iscategoryopen ? "active" : ""}`}>
              {categories.map((category) => (
                <Link key={category.slug} to={`category/${category.slug}`}>{category.name}</Link>
              ))}
            </div>
          </div>

          <div className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
            <Link className='btn-close-menu'><IoIosClose /></Link>
            <Link className='logo' to="/"><img src={Logo} alt="logo" /></Link>
            {Navlinks.map((item) => (
              <li key={item.title} className={location.pathname === item.link ? "active" : ""}><Link to={item.link}>{item.title}</Link></li>
            ))}
          </div>
        </nav>

        <div className="icons">
          <Link to="/"><PiSignInBold /></Link>
          <Link to="/"><FaUserPlus /></Link>
        </div>


        <div className="icons2">
              <Link to="/"><PiSignInBold /></Link>
              <Link to="/"><FaUserPlus /></Link>
            </div>
            
      </div>
    </div>
  )
}

export default BottomNav