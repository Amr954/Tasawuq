import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <>
            <div className="container my-3 my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5 bg-light text-center">
                            <h4 className="p-5 display-5">404: Page Not Found</h4>
                            <Link to="/">
                                <button className='back-btn'><FaLongArrowAltLeft /> Continue Shopping</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound