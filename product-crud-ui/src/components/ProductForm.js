import React, { useEffect, useState } from 'react';
import { addProduct, updateProduct } from '../api/api';

function ProductForm({ authHeader, editingProduct, onDone }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
    } else {
      setName('');
      setPrice('');
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price };

    if (editingProduct) {
      updateProduct(editingProduct.id, product, authHeader).then(onDone);
    } else {
      addProduct(product, authHeader).then(() => {
        setName('');
        setPrice('');
        onDone();
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} placeholder="Product Name" onChange={e => setName(e.target.value)} />
      <input value={price} placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <button type="submit">{editingProduct ? 'Update' : 'Add'} Product</button>
    </form>
  );
}

export default ProductForm;
