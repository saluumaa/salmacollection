import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt={product.name} />  
        </div>
        </div>
    <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>
                (122)
            </p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-prices-new">
                ${product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
            A lightweight, usually knitted, pullover sweater intended for casual wear and typically having long sleeves, a crew neckline, and a ribbed waistband and cuffs.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button>ADD TO CART</button>
        <p className='productdisplay-right-category'>
        <span>Category:</span>Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'>
        <span>Tags:</span>Modern, Latest</p>
    </div>
    </div>
  )
}

export default ProductDisplay