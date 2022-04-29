import { ICharacters } from '../../interfaces/charactersResponse';
import { charactersState } from './';

type charactersActionType =
  | { type: 'load-characters'; payload: ICharacters[] }
  | { type: 'add-error' }
  | { type: 'remove-loading' };

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

    case 'remove-loading':
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
