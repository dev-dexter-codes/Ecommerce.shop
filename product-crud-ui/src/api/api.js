import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/products';

export const getProducts = (authHeader) =>
  axios.get(BASE_URL, { headers: { Authorization: authHeader } });

export const addProduct = (product, authHeader) =>
  axios.post(BASE_URL, product, { headers: { Authorization: authHeader } });

export const updateProduct = (id, product, authHeader) =>
  axios.put(`${BASE_URL}/${id}`, product, { headers: { Authorization: authHeader } });

export const deleteProduct = (id, authHeader) =>
  axios.delete(`${BASE_URL}/${id}`, { headers: { Authorization: authHeader } });
