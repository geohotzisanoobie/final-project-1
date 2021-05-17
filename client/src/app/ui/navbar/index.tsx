import React from "react";
import { Link } from "react-router-dom";

import { books } from "../../navigation/books";

export const NavBar = () => {
  return (
    <nav className="nav">
      <Link to={books.home} className="nav__link">
        Pokemons
      </Link>
      <Link to={books.home} className="nav__link">
        Pokemons
      </Link>
    </nav>
  );
};
