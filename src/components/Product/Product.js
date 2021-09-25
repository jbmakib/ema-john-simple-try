import React from "react";
import "./Product.css";

const Product = (props) => {
    const { product, handleClick } = props;
    const { img, category, name, seller, price, stock } = product;
    return (
        <div className="cart">
            <div>
                <img src={img} alt={category + "pic"} />
            </div>
            <div>
                <h4>{name}</h4>
                <small>by: {seller}</small>
                <p>
                    Price: <b>{price}</b>
                </p>
                <small>Only {stock} left - Order Soon</small>
                <button
                    onClick={() => handleClick(product)}
                    className="orange-btn"
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
