import React from 'react'

function Products_images({product}) {
    return (
        
            <div className="imgs-item">
                <div className="big-img">
                    <img id='big_image' src={product.images[0]} alt={product.title} />
                </div>
                <div className="sm-imgs">
                    {product.images.map((img, index) => (
                        <div className="sm-div-img" key={index}>
                            <img  src={img} alt={product.title} onClick={() => document.getElementById("big_image").src = img} />
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Products_images