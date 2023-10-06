interface SearchLetterProps {
  onLetterClick: (letter: string) => void;
}

export const SearchLetter: React.FC<SearchLetterProps> = ({
  onLetterClick,
}) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <div className="text-center">
      <div className="flex flex-wrap justify-center space-x-2">
        {alphabet.split('').map((letter) => (
          <span
            key={letter}
            className="cursor-pointer hover:text-orange-500 hover:scale-150 text-xl md:text-1xl lg:text-2xl mb-6"
            onClick={() => onLetterClick(letter)}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};
