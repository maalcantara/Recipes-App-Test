import React, { useState } from 'react';
import { Search } from '../components/Search';
import { useGetIngredients } from '../services/GET/useGetIngredients';
import { FaBowlFood } from 'react-icons/fa6';
import { Title } from '../components/UI/Title';
import { Link } from 'react-router-dom';
import { Loading } from '../components/UI/Loading';

const MealIngredients: React.FC = () => {
  const [searchIngredients, setSearchIngredients] = useState<string>('');
  const { meals, loading, error } = useGetIngredients();

  const filteredMeals = meals.filter((meal) =>
    meal.strIngredient
      .toLocaleLowerCase()
      .includes(searchIngredients.toLocaleLowerCase())
  );

  return (
    <main className="bg-gray-100 ">
      <Title icon={<FaBowlFood size={25} />} text="Ingredients" />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Search
            placeholder="Search for Ingredients..."
            onChange={(value) => setSearchIngredients(value)}
            value={searchIngredients}
          />
          {error ? (
            <h1>Nenhum Resultado Encontrado...</h1>
          ) : (
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredMeals.map((meal) => (
                  <Link
                    to={`/by-ingredient/${meal.strIngredient}`}
                    className="block bg-white rounded p-3 mb-3 shadow"
                  >
                    <h3 className="text-2xl font-bold mb-2">
                      {meal.strIngredient}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default MealIngredients;
