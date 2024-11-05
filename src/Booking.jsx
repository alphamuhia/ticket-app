import React, { useState } from "react";
import Ticket from "./Ticket";
import Checkout from "./Checkout";

const Booking = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      name: "Avatar",
      productionCompany: "20th Century Fox",
      releaseDate: "2009-12-18",
      theater: "IMAX",
      price: 1500,
      poster: "/images/avatar last air bander.jpg",
    },
    {
      id: 2,
      name: "Titanic",
      productionCompany: "Paramount Pictures",
      releaseDate: "1997-12-19",
      theater: "Regular",
      price: 1200,
      poster: "/images/titanic.webp",
    },
    {
      id: 3,
      name: "The Godfather",
      productionCompany: "Paramount Pictures",
      releaseDate: "1972-03-24",
      theater: "Classic",
      price: 1000,
      poster: "/images/godfather.jpg",
    },
    {
      id: 4,
      name: "The Dark Knight",
      productionCompany: "Warner Bros.",
      releaseDate: "2008-07-18",
      theater: "IMAX",
      price: 1500,
      poster: "/images/darkknight.webp",
    },
    {
      id: 5,
      name: "Inception",
      productionCompany: "Warner Bros.",
      releaseDate: "2010-07-16",
      theater: "Regular",
      price: 1400,
      poster: "/images/inception.webp",
    },
    {
      id: 6,
      name: "Fight Club",
      productionCompany: "20th Century Fox",
      releaseDate: "1999-10-15",
      theater: "Classic",
      price: 1000,
      poster: "/images/fightclub.webp",
    },
    {
      id: 7,
      name: "Forrest Gump",
      productionCompany: "Paramount Pictures",
      releaseDate: "1994-07-06",
      theater: "Regular",
      price: 1200,
      poster: "/images/forrest.jpg",
    },
    {
      id: 9,
      name: "The Shawshank Redemption",
      productionCompany: "Columbia Pictures",
      releaseDate: "1994-09-23",
      theater: "Classic",
      price: 1000,
      poster: "/images/redemption.webp",
    },
    {
      id: 10,
      name: "Pulp Fiction",
      productionCompany: "Miramax Films",
      releaseDate: "1994-10-14",
      theater: "Regular",
      price: 1200,
      poster: "/images/pulp.jpg",
    },
    {
      id: 11,
      name: "Gladiator",
      productionCompany: "DreamWorks Pictures",
      releaseDate: "2000-05-05",
      theater: "IMAX",
      price: 1500,
      poster: "/images/Gladiator.jpg",
    },
    {
      id: 12,
      name: "Jurassic Park",
      productionCompany: "Universal Pictures",
      releaseDate: "1993-06-11",
      theater: "Regular",
      price: 1200,
      poster: "/images/jurassic.jpg",
    },
    {
      id: 13,
      name: "The Lion King",
      productionCompany: "Walt Disney",
      releaseDate: "1994-06-15",
      theater: "Classic",
      price: 1000,
      poster: "/images/lion king.jpg",
    },
    {
      id: 14,
      name: "The Silence of the Lambs",
      productionCompany: "Orion Pictures",
      releaseDate: "1991-02-14",
      theater: "Regular",
      price: 1200,
      poster: "/images/silence.webp",
    },
    {
      id: 15,
      name: "Saving Private Ryan",
      productionCompany: "DreamWorks Pictures",
      releaseDate: "1998-07-24",
      theater: "IMAX",
      price: 1500,
      poster: "/images/private ryan.jpg",
    },
    {
      id: 16,
      name: "The Social Network",
      productionCompany: "Columbia Pictures",
      releaseDate: "2010-10-01",
      theater: "Regular",
      price: 1400,
      poster: "/images/social network.jpg",
    },
    {
      id: 17,
      name: "Mad Max: Fury Road",
      productionCompany: "Warner Bros.",
      releaseDate: "2015-05-15",
      theater: "IMAX",
      price: 1500,
      poster: "/images/mad max.webp",
    },
    {
      id: 18,
      name: "The Avengers",
      productionCompany: "Marvel Studios",
      releaseDate: "2012-05-04",
      theater: "Regular",
      price: 1400,
      poster: "/images/avangers.webp",
    },
    {
      id: 19,
      name: "Frozen",
      productionCompany: "Walt Disney Animation Studios",
      releaseDate: "2013-11-27",
      theater: "Regular",
      price: 1200,
      poster: "/images/frozen.webp",
    },
    {
      id: 20,
      name: "Inside Out",
      productionCompany: "Pixar Animation Studios",
      releaseDate: "2015-06-19",
      theater: "Regular",
      price: 1200,
      poster: "/images/inside out.webp",
    },
    {
      id: 21,
      name: "Spider-Man: No Way Home",
      productionCompany: "Sony Pictures",
      releaseDate: "2021-12-17",
      theater: "IMAX",
      price: 1500,
      poster: "/images/spider man.avif",
    },
    {
      id: 22,
      name: "Black Panther",
      productionCompany: "Marvel Studios",
      releaseDate: "2018-02-16",
      theater: "Regular",
      price: 1400,
      poster: "/images/panther.jpg",
    },
    {
      id: 23,
      name: "Wonder Woman",
      productionCompany: "Warner Bros.",
      releaseDate: "2017-06-02",
      theater: "Regular",
      price: 1400,
      poster: "/images/wonder.webp",
    },
    {
      id: 24,
      name: "Coco",
      productionCompany: "Pixar Animation Studios",
      releaseDate: "2017-11-22",
      theater: "Regular",
      price: 1200,
      poster: "/images/coco.jpg",
    },
    {
      id: 25,
      name: "Avatar: The Way of Water",
      productionCompany: "20th Century Studios",
      releaseDate: "2022-12-16",
      theater: "IMAX",
      price: 1500,
      poster: "/images/avatar.jpg",
    },
    {
      id: 26,
      name: "Dune",
      productionCompany: "Warner Bros.",
      releaseDate: "2021-10-22",
      theater: "IMAX",
      price: 1500,
      poster: "/images/dune.webp",
    },
    {
      id: 27,
      name: "The Matrix Resurrections",
      productionCompany: "Warner Bros.",
      releaseDate: "2021-12-22",
      theater: "Regular",
      price: 1400,
      poster: "/images/matrix resurection.jpg",
    },
    {
      id: 28,
      name: "Shang-Chi and the Legend of the Ten Rings",
      productionCompany: "Marvel Studios",
      releaseDate: "2021-09-03",
      theater: "Regular",
      price: 1400,
      poster: "/images/shang chi.jpg",
    },
    {
      id: 29,
      name: "No Time to Die",
      productionCompany: "Eon Productions",
      releaseDate: "2021-09-30",
      theater: "Regular",
      price: 1400,
      poster: "/images/no time to die.jpg",
    },
    {
      id: 30,
      name: "Top Gun: Maverick",
      productionCompany: "Paramount Pictures",
      releaseDate: "2022-05-27",
      theater: "IMAX",
      price: 1500,
      poster: "/images/topgun.jpg",
    },
    {
      id: 31,
      name: "Oppenheimer",
      productionCompany: "Universal Pictures",
      releaseDate: "2023-07-21",
      theater: "Regular",
      price: 1400,
      poster: "/images/oppenheimer.avif",
    },
    {
      id: 32,
      name: "Barbie",
      productionCompany: "Warner Bros.",
      releaseDate: "2023-07-21",
      theater: "Regular",
      price: 1400,
      poster: "/images/barbie.webp",
    },
    {
      id: 33,
      name: "Killers of the Flower Moon",
      productionCompany: "Apple Original Films",
      releaseDate: "2023-10-20",
      theater: "Regular",
      price: 1400,
      poster: "/images/killers.webp",
    },
    {
      id: 34,
      name: "Mission: Impossible - Dead Reckoning Part One",
      productionCompany: "Paramount Pictures",
      releaseDate: "2023-07-12",
      theater: "IMAX",
      price: 1500,
      poster: "/images/mission.jpg",
    },
    {
      id: 35,
      name: "Scream VI",
      productionCompany: "Paramount Pictures",
      releaseDate: "2023-03-10",
      theater: "Regular",
      price: 1200,
      poster: "/images/scream.jpg",
    },
    {
      id: 36,
      name: "The Super Mario Bros. Movie",
      productionCompany: "Illumination",
      releaseDate: "2023-04-05",
      theater: "Regular",
      price: 1200,
      poster: "/images/super mario.avif",
    },
    {
      id: 37,
      name: "Guardians of the Galaxy Vol. 3",
      productionCompany: "Marvel Studios",
      releaseDate: "2023-05-05",
      theater: "Regular",
      price: 1400,
      poster: "/images/guardians.webp",
    },
    {
      id: 38,
      name: "Ant-Man and The Wasp: Quantumania",
      productionCompany: "Marvel Studios",
      releaseDate: "2023-02-17",
      theater: "Regular",
      price: 1400,
      poster: "/images/quantumania.jpg",
    },
    {
      id: 39,
      name: "Elemental",
      productionCompany: "Pixar Animation Studios",
      releaseDate: "2023-06-16",
      theater: "Regular",
      price: 1200,
      poster: "/images/elemental.webp",
    },
    {
      id: 40,
      name: "Aquaman and the Lost Kingdom",
      productionCompany: "Warner Bros.",
      releaseDate: "2023-12-25",
      theater: "IMAX",
      price: 1500,
      poster: "/images/aquaman.webp",
    },
    {
      id: 41,
      name: "The Hunger Games: The Ballad of Songbirds and Snakes",
      productionCompany: "Lionsgate",
      releaseDate: "2023-11-17",
      theater: "Regular",
      price: 1400,
      poster: "/images/the hunger games.webp",
    },
    {
      id: 42,
      name: "Trolls Band Together",
      productionCompany: "DreamWorks Animation",
      releaseDate: "2023-11-17",
      theater: "Regular",
      price: 1200,
      poster: "/images/trolls.webp",
    },
    {
      id: 43,
      name: "Napoleon",
      productionCompany: "Apple Original Films",
      releaseDate: "2023-11-22",
      theater: "Regular",
      price: 1400,
      poster: "/images/napoleon.avif",
    },
    {
      id: 44,
      name: "Wonka",
      productionCompany: "Warner Bros.",
      releaseDate: "2023-12-15",
      theater: "Regular",
      price: 1400,
      poster: "/images/wonka.webp",
    },
    {
      id: 45,
      name: "Furiosa",
      productionCompany: "Warner Bros.",
      releaseDate: "2024-05-24",
      theater: "Regular",
      price: 1400,
      poster: "/images/furiosa.webp",
    },
    {
      id: 46,
      name: "Deadpool 3",
      productionCompany: "20th Century Studios",
      releaseDate: "2024-05-03",
      theater: "Regular",
      price: 1400,
      poster: "/images/deadpool 3.jpg",
    },
    {
      id: 47,
      name: "Fantastic Beasts: The Secrets of Dumbledore",
      productionCompany: "Warner Bros.",
      releaseDate: "2022-04-15",
      theater: "Regular",
      price: 1400,
      poster: "/images/fantastic beasts.jpg",
    },
    {
      id: 48,
      name: "Indiana Jones and the Dial of Destiny",
      productionCompany: "Lucasfilm",
      releaseDate: "2023-06-30",
      theater: "Regular",
      price: 1400,
      poster: "/images/indiana.avif",
    },
    {
      id: 49,
      name: "The Flash",
      productionCompany: "Warner Bros.",
      releaseDate: "2023-06-16",
      theater: "IMAX",
      price: 1500,
      poster: "/images/the flash.jpg",
    },
    {
      id: 50,
      name: "The Marvels",
      productionCompany: "Marvel Studios",
      releaseDate: "2023-11-10",
      theater: "Regular",
      price: 1400,
      poster: "/images/THE-MARVELS.jpg",
    },
    {
      id: 51,
      name: "The Godfather Part II",
      productionCompany: "Paramount Pictures",
      releaseDate: "1974-12-20",
      theater: "Classic",
      price: 1000,
      poster: "/images/godfather 3.jpg",
    },
    {
      id: 51,
      name: "The Godfather Part II",
      productionCompany: "Paramount Pictures",
      releaseDate: "1974-12-20",
      theater: "Classic",
      price: 1000,
      poster: "/images/godfather 2.jpg",
    },
  ]);

  const [cart, setCart] = useState([]);

  const handleBook = (ticket) => {
    if (!cart.some((item) => item.id === ticket.id)) {
      setCart([...cart, ticket]);
    }
  };

  const handleRemoveFromCart = (ticketId) => {
    setCart(cart.filter((ticket) => ticket.id !== ticketId));
  };

  const handleConfirm = () => {
    alert("Booking confirmed!");
    setCart([]);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Movie Ticket Booking
      </h1>

      <button className="border border-gray-700 bg-blue-500 rounded fixed top-0 right-0">
        Cart
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} handleBook={handleBook} />
        ))}
      </div>

      <div className="mt-8">
        <Checkout
          cart={cart}
          handleConfirm={handleConfirm}
          handleRemoveFromCart={handleRemoveFromCart}
          className="bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
        />
      </div>
    </div>
  );
};

export default Booking;
