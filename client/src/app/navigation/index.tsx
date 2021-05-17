import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { books } from "./books";

import { Pokemons } from "../pages/pokemons";
import { ErrorPage } from "../pages/404";
import { Pokemon } from "../pages/pokemon";
import { CaughtPokemons } from "../pages/caught_pokemons";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={books.home}>
        <Pokemons />
      </Route>
      <Route path={books.pokemon}>
        <Pokemon />
      </Route>
      <Route path={books.caughtPokemons}>
        <CaughtPokemons />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  </Router>
);
