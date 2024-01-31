import React, { useState, useEffect } from 'react';
import ProductList from './Components/ProductList';
import Pagination from './Components/Pagination';
import Navbar from './Components/NavBar';
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const productsPerPage = 20; 
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://assignment2-hcy2.vercel.app/api/products?page=${currentPage}&pageSize=${productsPerPage}`);
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(data.pagination.totalPages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className='app'>
      <Navbar cartCount={cartCount} />
      <div className='banner'>
        <img src="https://wearyourroots.com/cdn/shop/collections/hats-429055_1445x.jpg?v=1697836813" alt="banner-img" />
      </div>
      <div className="app-container">
        <ProductList items={products} onAddToCart={handleAddToCart} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default App;
