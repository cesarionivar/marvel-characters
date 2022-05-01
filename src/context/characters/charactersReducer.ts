import { ICharacters } from '../../interfaces/charactersResponse';
import { charactersState } from './';

type charactersActionType =
  | { type: 'load-characters'; payload: ICharacters[] }
  | { type: 'add-error' }
  | { type: 'add-loading' }
  | { type: 'remove-loading' }
  | { type: 'set-totalCharacters'; payload: number }
  | { type: 'previous-page'; payload: number }
  | { type: 'next-page'; payload: number };

export const charactersReducer = (
  state: charactersState,
  action: charactersActionType
): charactersState => {
  switch (action.type) {
    case 'load-characters':
      return {
        ...state,
        error: false,
        characters: [...action.payload],
      };

    case 'add-error':
      return {
        ...state,
        error: true,
      };

    case 'add-loading':
      return {
        ...state,
        loading: true,
      };

    case 'remove-loading':
      return {
        ...state,
        loading: false,
      };

    case 'set-totalCharacters':
      return {
        ...state,
        totalCharacters: action.payload,
      };

    case 'previous-page':
      return {
        ...state,
        offset: action.payload,
      };

    case 'next-page':
      return {
        ...state,
        offset: action.payload,
      };

    default:
      return state;
  }
};
