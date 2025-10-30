import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../features/cartSlice';

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>🛒 Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} style={{ marginBottom: '10px' }}>
              <strong>{item.name}</strong> - ${item.price} × 
              <input
                type="number"
                min="1"
                value={item.quantity}
                style={{ width: '50px', marginLeft: '5px', marginRight: '5px' }}
                onChange={(e) =>
                  dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                }
              />
              = ${item.price * item.quantity}
              <button
                style={{ marginLeft: '10px' }}
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ${total}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
