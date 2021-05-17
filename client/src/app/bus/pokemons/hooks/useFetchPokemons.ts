import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pokemonsActions } from "../actions";
import { catchPokemon } from "../../shared";

export const useFetchPokemons = (isCaught: boolean) => {
  const dispatch = useDispatch();
  const history = useHistory();

  !isCaught
    ? useEffect(() => {
        dispatch(pokemonsActions.fetchAsync(20, 0));
      }, [dispatch])
    : useEffect(() => {
        dispatch(pokemonsActions.fetchCaughtAsync());
      }, [dispatch]);

  const { data, isFetching, error } = useSelector(
    (state: any) => state.pokemons
  );

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const lastEl = entries[0];
        if (lastEl.isIntersecting) {
          dispatch(pokemonsActions.fetchAsync(+lastEl.target.id + 20, 0));
        }
      },
      { threshold: 1 }
    )
  );

  const [el, setEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const curEl = el;
    const curObserver = observer.current;

    if (curEl) {
      curObserver.observe(curEl);
    }

    return () => {
      if (curEl) {
        curObserver.unobserve(curEl);
      }
    };
  }, [el]);

  console.log({ data, isFetching, error });

  const redirectToPokPageOnClick = (id: string) => {
    history.push(`/pokemons/${id}`);
  };

  const lastElId = el && el.id ? el.id : "";
  const catchPokemonHandler = catchPokemon(dispatch, +lastElId);

  return {
    data,
    isFetching,
    error,
    redirectToPokPageOnClick,
    setEl,
    catchPokemonHandler,
  };
};
