import React from "react";
// import Booking from "./Booking";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Homepage";
import EventList from "./Components/Eventlist";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Booking /> */}

      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventList />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
