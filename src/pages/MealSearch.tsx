import React, { useState } from 'react';
import { Card } from '../components/UI/Card';
import { Search } from '../components/Search';
import { useGetRevenues } from '../services/GET/useGetRevenues';
import { Title } from '../components/UI/Title';
import { BiSearchAlt } from 'react-icons/bi';
import { Loading } from '../components/UI/Loading';

const MealSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { meals, loading, error } = useGetRevenues(searchQuery);

  return (
    <main className="bg-gray-100 mx-auto">
      <Title icon={<BiSearchAlt size={25} />} text="Search Meals by Name" />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Search
            placeholder="Search for Meals..."
            onChange={(value) => setSearchQuery(value)}
            value={searchQuery}
          />
          {error ? (
            <h1>No results found for your search...</h1>
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

export default MealSearch;
