import React, { useState, useEffect } from 'react';
import ProductList from './Components/ProductList';
import Pagination from './Components/Pagination';
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
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

  return (
    <div className="app-container">
      <h1 className='product-heading'>Product List</h1>
      <ProductList className="Cardlist_box" items={products} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
