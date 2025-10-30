import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

const products = [
  { id: 1, name: 'Laptop', price: 800 },
  { id: 2, name: 'Headphones', price: 150 },
  { id: 3, name: 'Keyboard', price: 100 },
];

const Products = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: '10px' }}>
          <strong>{p.name}</strong> - ${p.price}
          <button
            style={{ marginLeft: '10px' }}
            onClick={() => dispatch(addItem(p))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
