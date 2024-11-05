import React, { useState } from "react";

function Ticket({ ticket, handleBook }) {
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    setIsBooked(true);
    handleBook(ticket);
  };

  return (
    <div className="ticket-card border p-4 rounded-lg shadow-lg flex flex-col items-center">
      <img
        src={ticket.poster}
        alt={ticket.name}
        className="w-40 h-60 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold">{ticket.name}</h3>
      <p className="text-sm">Theater: {ticket.theater}</p>
      <p className="text-sm">Price: ${(ticket.price / 100).toFixed(2)}</p>
      <button
        onClick={handleBooking}
        disabled={isBooked}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        {isBooked ? "Booked" : "Book"}
      </button>
    </div>
  );
}

export default Ticket;
