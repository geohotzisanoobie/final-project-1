import React from "react";
import { Link } from "react-router-dom";

import { books } from "../../navigation/books";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to={books.home} className="navbar__link">
        Pokemons
      </Link>
      <Link to={books.caughtPokemons} className="navbar__link">
        Caught Pokemons
      </Link>
    </nav>
  );
};
