import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api/api';

function ProductList({ authHeader, onEdit }) {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    getProducts(authHeader).then(res => setProducts(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id, authHeader).then(fetchData);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => onEdit(p)}>Edit</button>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
