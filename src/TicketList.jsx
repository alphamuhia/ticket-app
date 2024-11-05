import React from "react";

const TicketList = ({ tickets, onBook }) => {
  return (
    <div>
      <h2>Available Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            {ticket.name} - Ksh {ticket.price}
            <button onClick={() => onBook(ticket)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
