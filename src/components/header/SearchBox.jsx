import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './header.css'
function SearchBox() {

    const [searchitem, setSearchItem] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const suggestionsRef = useRef(null)

    const navigate = useNavigate()

    const location = useLocation()

    const handlesubmit = (e) => {
        e.preventDefault()
        if (searchitem.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchitem.trim()).toLocaleLowerCase()}`)
        }
        setSuggestions([])
    }
    useEffect(() => {
        const fetchsuggestions = async () => {

            if (!searchitem.trim()) {
                setSuggestions([])
                return;
            }

            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${searchitem}`)
                const data = await res.json()
                setSuggestions(data.products.slice(0, 5) || [])
            } catch (error) {
                console.log("search error : ", error);
                setSuggestions([])
            }
        }
        const debounce = setTimeout(() => {
            fetchsuggestions()
        }, 300);
        return () => clearTimeout(debounce)
    }, [searchitem])
    console.log(suggestions);


    // clear li after submtion
    useEffect(() => {
        setSuggestions([])
    }, [location])
    /////////////////////

    useEffect(() => {
        setSearchItem("")
    }, [location])

// Close suggestions list when clicking outside

useEffect(() => {
  const handleClickOutside = (event) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
      setSuggestions([])
    }
  }

  document.addEventListener('mousedown', handleClickOutside)
  
  return () => {
    document.removeEventListener('mousedown', handleClickOutside)
  }
}, [])


    return (
        <div className='searchbox_container' ref={suggestionsRef}>
            <form onSubmit={handlesubmit} className='search-box'>
                <input type="text" name='search' id='search' placeholder='search for products....'
                    value={searchitem} // this line to clear the search bar if i changing the location
                    onChange={(e) => setSearchItem(e.target.value)}
                    autoComplete='off'
                />
                <button type='sumbit'><FaSearch /></button>
            </form>

            {suggestions.length > 0 && (
                <ul className='suggestions'>
                    {suggestions.map((item) => (
                        <Link to={`/products/${item.id}`} key={item.id}>
                            <li key={item.id}>
                                <img src={item.images[0]} />
                                <span>{item.title}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchBox