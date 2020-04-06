import React from 'react'

const ProductCard = ({ img, title, price }) => {
    return (
        <div className="card">
            <img src={img} alt=""/>
            <h3 className="card__title">{title}</h3>
            <div className="card__details">
                <h3 className="price">{price}</h3>
            </div>
        </div>
    )
}

export default ProductCard;
