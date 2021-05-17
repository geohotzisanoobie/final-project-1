import { combineReducers } from "redux";
//Reducers
import { pokemonsReducer as pokemons } from "../bus/pokemons/reducer";
import { pokemonReducer as pokemon } from "../bus/pokemon/reducer";
export const rootReducer = combineReducers({
  pokemons,
  pokemon,
});
