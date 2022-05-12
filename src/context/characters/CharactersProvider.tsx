import { useEffect, useReducer, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import type {
  CharactersResponse,
  ICharacters,
} from '../../interfaces/charactersResponse';
import { CharactersContext, charactersReducer } from './';

const TEMP_TOTAL_RESULTS = 1562;
const CHARACTERS_LIMIT = 20;

export interface charactersState {
  characters: ICharacters[];
  loading: boolean;
  error: boolean;
  offset: number;
  totalCharacters: number;
}

const Characters_INITIAL_STATE: charactersState = {
  characters: [],
  error: false,
  loading: true,
  offset: 0,
  totalCharacters: TEMP_TOTAL_RESULTS,
};

interface Props {
  children: React.ReactNode;
}

interface CharactersDataResponse {
  data: CharactersResponse;
}

export const CharactersProvider = ({ children }: Props) => {
  const [params, setParams] = useSearchParams();
  const isFirstRender = useRef<boolean>(true);
  const [state, dispatch] = useReducer(
    charactersReducer,
    Characters_INITIAL_STATE
  );

  const { offset, totalCharacters } = state;

  const getCharacters = async (offset: number, searchTerm = '') => {
    try {
      dispatch({ type: 'add-loading' });

      const baseUrl = `${
        import.meta.env.VITE_BASE_URL
      }/v1/public/characters?offset=${offset}&apikey=${
        import.meta.env.VITE_API_KEY
      }`;

      const charactersEndpoint = searchTerm
        ? `${baseUrl}&nameStartsWith=${searchTerm}`
        : baseUrl;

      const res = await fetch(charactersEndpoint);

      const { data }: CharactersDataResponse = await res.json();

      if (isFirstRender.current) {
        dispatch({ type: 'set-totalCharacters', payload: data.total });
        isFirstRender.current = false;
      }

      dispatch({ type: 'load-characters', payload: data.results });
    } catch (error) {
      dispatch({ type: 'add-error' });
    } finally {
      dispatch({ type: 'remove-loading' });
    }
  };

  const getCharactersByOffset = () => {
    let page: number = parseInt(params.get('page') ?? '1');
    if (
      isNaN(page) ||
      page < 1 ||
      page > TEMP_TOTAL_RESULTS / CHARACTERS_LIMIT
    ) {
      setParams({ page: '1' });
      page = 1;
    }

    const offsetByPage = page * CHARACTERS_LIMIT - CHARACTERS_LIMIT;

    getCharacters(offsetByPage);
    dispatch({ type: 'set-offset', payload: offsetByPage });
  };

  const getCharactersBySearchTerm = (searchTerm: string) => {
    getCharacters(0, searchTerm);
  };

  const handlePreviousPage = () => {
    const previous = offset <= 0 ? 0 : offset - CHARACTERS_LIMIT;
    const page = previous / CHARACTERS_LIMIT + 1;
    setParams({ page: `${page}` });
    dispatch({ type: 'previous-page', payload: previous });
  };

  const handleNextPage = () => {
    const next =
      offset >= totalCharacters
        ? totalCharacters - offset
        : offset + CHARACTERS_LIMIT;
    const page = next / CHARACTERS_LIMIT + 1;
    setParams({ page: `${page}` });
    dispatch({ type: 'next-page', payload: next });
  };

  useEffect(() => {
    getCharactersByOffset();
  }, [offset]);

  return (
    <CharactersContext.Provider
      value={{
        ...state,
        handlePreviousPage,
        handleNextPage,
        getCharactersBySearchTerm,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
