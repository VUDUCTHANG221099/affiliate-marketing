import React from 'react';
import Item from './Item';
import '../css/Product.css';

const Product = ({ products }) => {
    return (
        <div className="product-grid">
            {products.map(product => (
                <Item key={product.item_id} product={product} />
            ))}
        </div>
    );
};

export default Product;
