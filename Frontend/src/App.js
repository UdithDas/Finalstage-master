import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import Body from './pages/Body.jsx';

const App = () => {
  return (
    
    <BrowserRouter>
    
      <Sidebar>
        <Routes>
          {/* <Route path="/" element={<Body/>} /> */}
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Comment method='post' />} />
          <Route path="/analytics" element={<Analytics method='get'/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
     </Sidebar>
    </BrowserRouter>
  );
};

export default App;