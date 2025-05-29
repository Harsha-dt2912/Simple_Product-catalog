import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Product Catalog
        </Link>
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Products</Link>
          <Link to="/products/new" className="nav-link">Add Product</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;