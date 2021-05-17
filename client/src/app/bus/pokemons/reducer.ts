import { pokemonsTypes, IInitialState, IAction } from "./types";

const initialState: IInitialState = {
  data: null,
  isFetching: false,
  error: null,
};

export const pokemonsReducer = (
  state: IInitialState = initialState,
  { payload, type }: IAction
) => {
  switch (type) {
    case pokemonsTypes.POKEMONS_START_FETCHING:
      return { ...state, isFetching: true };

    case pokemonsTypes.POKEMONS_STOP_FETCHING:
      return { ...state, isFetching: false };

    case pokemonsTypes.POKEMONS_FILL:
      return { ...state, data: payload };

    case pokemonsTypes.POKEMONS_FETCHING_ERROR:
      return { ...state, error: payload, data: null };

    default:
      return { ...state };
  }
};
