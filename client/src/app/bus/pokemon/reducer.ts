import { pokemonTypes } from "./types";

const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

export const pokemonReducer = (state: any, { payload, type }: any) => {
  switch (type) {
    case pokemonTypes.POKEMON_START_FETCHING:
      return { ...state, isFetching: true };

    case pokemonTypes.POKEMON_STOP_FETCHING:
      return { ...state, isFetching: false };

    case pokemonTypes.POKEMON_FILL:
      return { ...state, data: payload };

    case pokemonTypes.POKEMON_FETCHING_ERROR:
      return { ...state, error: payload, data: null };

    default:
      return { ...state };
  }
};
