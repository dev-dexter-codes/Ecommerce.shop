import React, { useState } from 'react';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  const [authHeader, setAuthHeader] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <div>
      <h1>Product CRUD App</h1>
      {!authHeader ? (
        <Login onLogin={setAuthHeader} />
      ) : (
        <>
          <ProductForm
            authHeader={authHeader}
            editingProduct={editingProduct}
            onDone={() => setEditingProduct(null)}
          />
          <ProductList
            authHeader={authHeader}
            onEdit={setEditingProduct}
          />
        </>
      )}
    </div>
  );
}

export default App;
