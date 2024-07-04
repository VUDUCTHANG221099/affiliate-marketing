import React, { useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import Search from './components/Search';
import Utility from './components/Utility';
import productData from './data/product.json';

const App = () => {
  const [products] = useState(productData);
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (query) => {
    if (query === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSortByName = (order) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (order === 'asc') return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });
    setFilteredProducts(sorted);
  };

  const handleSortByPrice = (order) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (order === 'min') return a.price - b.price;
      return b.price - a.price;
    });
    setFilteredProducts(sorted);
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <Utility onSortByName={handleSortByName} onSortByPrice={handleSortByPrice} />
      <Product products={filteredProducts} />
    </div>
  );
};

export default App;
