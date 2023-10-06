import React, { useState } from 'react';
import { Card } from '../components/UI/Card';
import { useGetWithLetter } from '../services/GET/useGetWithLetter';
import { SearchLetter } from '../components/SearchLetter';
import { Title } from '../components/UI/Title';
import { RxLetterCaseCapitalize } from 'react-icons/rx';
import { Loading } from '../components/UI/Loading';

const MealLetter: React.FC = () => {
  const [letterQuery, setLetterQuery] = useState<string>('');
  const { meals, loading, error } = useGetWithLetter(letterQuery);
  console.log(meals, 'letra clicada');

  const handleLetterClick = (letter: string) => {
    setLetterQuery(letter);
  };

  return (
    <main className="h-[90vh] bg-gray-100">
      <Title
        icon={<RxLetterCaseCapitalize size={25} />}
        text="Recipes by letter"
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <SearchLetter onLetterClick={handleLetterClick} />
          {error ? (
            <h1>No results found...</h1>
          ) : (
            <ul className="justify-center flex gap-4 px-8 flex-wrap">
              {meals.map((meal, index) => (
                <Card
                  id={meal.idMeal}
                  strInstructions={meal.strInstructions}
                  strMealThumb={meal.strMealThumb}
                  strYoutube={meal.strYoutube}
                  key={index}
                  strMeal={meal.strMeal}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </main>
  );
};

export default MealLetter;
