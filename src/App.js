// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homepage';
import EventList from './Components/Eventlist';
import Navbar from './Components/Navbar'

function App() {
  return (
    <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventList />} />
          </Routes>
        </div>
    </Router>
  );
}
export default App;