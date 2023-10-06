import { FC } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  id: string;
  strInstructions?: string;
  strYoutube?: string;
  strMealThumb: string;
  strMeal?: string;
}

export const Card: FC<CardProps> = ({
  id = '',
  strInstructions,
  strYoutube,
  strMeal,
  strMealThumb,
}) => {
  return (
    <div
      key={id}
      className="z-40 p-4 w-full max-w-xs bg-white shadow rounded-xl hover:scale-105 transition-all cursor-pointer"
    >
      <Link to={`/meal/${id}`}>
        <img
          src={strMealThumb}
          alt="food image"
          className="rounded-t-xl w-full h-48 object-cover"
        />
      </Link>

      <div className="p-3">
        <h2 className="text-xl font-semibold mb-2 ">{strMeal}</h2>
        <p className="text-gray-700 text-sm mb-4 overflow-hidden line-clamp-3">
          {strInstructions}
        </p>
        <article className="text-center">
          <Link
            to={strYoutube ?? ''}
            target="_blank"
            rel="noopener noreferrer"
            className="z-50 inline-block px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            YouTube
          </Link>
        </article>
      </div>
    </div>
  );
};
