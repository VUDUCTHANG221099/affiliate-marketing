import React from 'react';
import '../css/Item.css';

const Item = ({ product }) => {
    const baseUrl = "https://down-bs-vn.img.susercontent.com/";
    return (
        <div className="item" title={product.name}>
            <a href={product.product_link} target="_blank" rel="noopener noreferrer">
                <img src={`${baseUrl}${product.image}`} alt={product.name} />
                <h3 >{product.name}</h3>
                <p>{product.price}.000 VNĐ</p>

            </a>
        </div>
    );
};

export default Item;
