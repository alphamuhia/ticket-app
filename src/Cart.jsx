import React from "react";

const Checkout = ({ cart, handleConfirm, handleRemoveFromCart }) => {
  const totalPrice = cart.reduce((acc, ticket) => acc + ticket.price, 0);

  return (
    <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
      <h2 className="text-xl font-bold">Your Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((ticket, index) => (
              <li
                key={index}
                className="text-lg flex justify-between items-center mb-2"
              >
                <span>
                  {ticket.name} - ${ticket.price}
                </span>
                <button
                  onClick={() => handleRemoveFromCart(ticket.id)}
                  className="text-red-500 hover:text-red-700 transition duration-200"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold mt-4">Total: ${totalPrice}</p>
          <button
            onClick={handleConfirm}
            className="mt-4 bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-200"
          >
            Checkout
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Checkout;
