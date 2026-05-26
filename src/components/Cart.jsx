function Cart({ cart, totalNGN, removeFromCart, makePayment }) {
  return (
    <div className="cart-box">

      <h2>Cart ({cart.length})</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">

          <span>{item.title}</span>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>

        </div>
      ))}

      <h3>Total: ₦{totalNGN}</h3>

      <button className="pay-btn" onClick={makePayment}>
        Pay Now
      </button>

    </div>
  );
}

export default Cart;
