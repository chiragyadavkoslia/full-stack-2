import React from 'react';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div style={{ margin: '40px' }}>
      <h1>🛍️ Redux Toolkit Shopping Cart</h1>
      <div style={{ display: 'flex', gap: '50px' }}>
        <Products />
        <Cart />
      </div>
    </div>
  );
}

export default App;
