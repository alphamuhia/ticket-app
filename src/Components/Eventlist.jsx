// components/EventList.js
import React, { useState, useEffect } from "react";
import mod from "../images/mod.jpeg";
import soiree from "../images/soiree.jpeg";
import ripple from "../images/ripple.jpg";
import Raha from "../images/Raha.jpeg";
import Train from "../images/train.jpg";
import cult from "../images/cult.jpg";
import fash from "../images/fash.jpeg";
import rock from "../images/rock.jpg";
import car from "../images/car.jpg";
import wine from "../images/wine.png";

const mockEvents = [
  {
    id: 1,
    name: "SPECIAL TRAINING FOR SUSTAINABILITY LEADERSHIP",
    date: "Thursday 19 Dec 2024 ",
    location: "Maasai Beach Resort Hotel, Nyali, Mombasa",
    category: "Business",
    image: Train,
  },
  {
    id: 2,
    name: "Nairobi Cocktail Festival",
    date: "Friday 29 Nov 2024",
    location: "Alloy Sarit Center",
    category: "Entertaiment",
    image: wine,
  },
  {
    id: 3,
    name: "Ripples Of Sound",
    date: "Saturday November 30 2024",
    location: "Westlands Banquet Centre",
    category: "Music",
    image: ripple,
  },
  {
    id: 4,
    name: "The Caribbean Brunch Garden Soiree",
    date: "Saturday November 09 2024",
    location: "Naiposha Garden Soiree",
    category: "Entertainment",
    image: soiree,
  },
  {
    id: 5,
    name: "Time Attack",
    date: "Sunday 10 Nov 2024",
    location: "machakos people's park",
    category: "Sports",
    image: car,
  },
  {
    id: 6,
    name: "UCESCO Africa Cultural Charity Gala 2024",
    date: "Thursday 19 Dec 2024 ",
    location: "Maasai Beach Resort Hotel, Nyali, Mombasa",
    category: "Culture",
    image: cult,
  },
  {
    id: 7,
    name: "Back to Rock",
    date: "Saturday 09 Nov 2024",
    location: "Ballpoint Social Club",
    category: "Arts",
    image: rock,
  },
  {
    id: 8,
    name: "The Kenyan Fashion Story",
    date: "Saturday November 02 2024",
    location: "Barrels and Stools Lounge",
    category: "Entertainment",
    image: fash,
  },
  {
    id: 9,
    name: "RAHA FEST",
    date: "Monday December 30th",
    location: "Uhuru Gardens",
    category: "Music",
    image: Raha,
  },
  {
    id: 10,
    name: "NOMADIC ARTS FESTIVAL",
    date: "Friday December 06 2024",
    location: "Visa Oshwal Auditorium",
    category: "Music",
    image: mod,
  },
  // ... add more events as needed
];

const categories = [
  "All",
  "Business",
  "Culture",
  "Entertainment",
  "Sports",
  "Arts",
  "Music",
];

const EventList = () => {
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = mockEvents.filter(
      (event) =>
        (selectedCategory === "All" || event.category === selectedCategory) &&
        (event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredEvents(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Discover Events
      </h1>

      <div className="mb-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full px-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                {event.category}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {event.name}
              </h2>
              <p className="text-gray-600 mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                {event.date}
              </p>
              <p className="text-gray-600 mb-4 flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                {event.location}
              </p>
              <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
