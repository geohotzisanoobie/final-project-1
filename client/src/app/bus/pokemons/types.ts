export const pokemonsTypes = {
  // Async
  POKEMONS_FETCH_ASYNC: "POKEMONS_FETCH_ASYNC",
  // Sync
  POKEMONS_START_FETCHING: "POKEMONS_START_FETCHING",
  POKEMONS_STOP_FETCHING: "POKEMONS_STOP_FETCHING",
  POKEMONS_FILL: "POKEMONS_FILL",
  POKEMONS_FETCHING_ERROR: "POKEMONS_FETCHING_ERROR",
} as const;

export interface IPokemon {
  image: string;
  name: string;
  url: string;
  isCaught?: boolean;
  id?: string;
}

export interface IInitialState {
  data: IPokemon[] | null;
  isFetching: boolean;
  error: { status: number } | null;
  limit: number;
  offset: number;
}

export interface IAction {
  type: string;
  payload?: IPokemon[] | { status: number };
  error?: boolean;
}
