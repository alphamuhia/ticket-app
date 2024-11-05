import React from "react";

const Checkout = ({ cart, handleConfirm, handleRemoveFromCart }) => {
  const totalPrice = cart.reduce((total, ticket) => total + ticket.price, 0);

  return (
    <div className="checkout mt-6 p-4 border-t border-gray-300">
      <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((ticket) => (
              <li
                key={ticket.id}
                className="mb-2 flex justify-between items-center"
              >
                <span>
                  {ticket.name} - ${(ticket.price / 100).toFixed(2)}
                </span>
                <button
                  onClick={() => handleRemoveFromCart(ticket.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-2 font-bold">
            Total: ${(totalPrice / 100).toFixed(2)}
          </div>
          <button
            onClick={handleConfirm}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Confirm Booking
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
