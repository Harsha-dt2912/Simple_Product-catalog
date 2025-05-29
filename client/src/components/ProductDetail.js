import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
      navigate('/');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        navigate('/');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      {product.imageUrl && (
        <div className="product-image-section">
          <img src={product.imageUrl} alt={product.name} className="product-detail-image" />
        </div>
      )}
      <div className="product-info">
        <p className="description">{product.description}</p>
        <p className="price">Price: ${product.price}</p>
        <p className="category">Category: {product.category}</p>
      </div>
      <div className="actions">
        <button
          onClick={() => navigate(`/products/${id}/edit`)}
          className="btn btn-edit"
        >
          Edit
        </button>
        <button onClick={handleDelete} className="btn btn-delete">
          Delete
        </button>
        <button onClick={() => navigate('/')} className="btn btn-secondary">
          Back to List
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;