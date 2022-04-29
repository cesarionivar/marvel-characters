import { ICharacters } from '../../interfaces/charactersResponse';

interface Props {
  character: ICharacters;
}

export const CharacterItem = ({ character }: Props) => {
  const { name, thumbnail } = character;

  return (
    <div className='bg-gray-300 text-slate-900 dark:bg-slate-700 dark:text-white text-center rounded'>
      <img
        src={thumbnail.path + '.' + thumbnail.extension}
        alt={name}
        className='rounded-t h-60 object-cover object-left-top w-full'
      />
      <p className='my-3'>{name}</p>
    </div>
  );
};
