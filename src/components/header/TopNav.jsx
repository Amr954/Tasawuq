import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import './header.css'
import { CartContext } from '../context/CartContext';
import SearchBox from './SearchBox';
function TopNav() {

  const { cartitems, favorites } = useContext(CartContext)

  return (
    
    <div className='top-header'>
      <div className="container">
        <Link className='logo' to="/"><img src={Logo} alt="logo" /></Link>

        <SearchBox />

        <div className="header-icons">
          <div className="icon">
            <Link to="/favorites">
              <CiHeart />
              <span className="count">{favorites.length}</span>
            </Link>
          </div>
          <div className="icon">
            <Link to="/cart">
              <FiShoppingCart />
              <span className="count">{cartitems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav