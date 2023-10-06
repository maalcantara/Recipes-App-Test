import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetAllRevenue } from '../services/GET/useGetAllRevenue';
import { Loading } from '../components/UI/Loading';
import { AllRevenue } from '../services/types';

const MAX_INGREDIENTS = 20;

const MealRevenue: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { error, loading, meals } = useGetAllRevenue(String(id));

  const renderList = (prefix: string, meal: AllRevenue) => {
    let items = [];
    for (let i = 1; i <= MAX_INGREDIENTS; i++) {
      const value = meal[`${prefix}${i}` as keyof typeof meal];
      if (value) {
        items.push(
          <li key={i}>
            {prefix === 'strIngredient' ? `${i}. ` : ''}
            {value}
          </li>
        );
      }
    }
    return items;
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <div>Erro aqui...</div>
      ) : (
        meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="h-[100vh] bg-gray-100 mx-auto max-w-[800px] p-8"
          >
            <h1 className="text-4xl font-bold mb-5 text-orange-500">
              {meal.strMeal}
            </h1>
            <img
              src={meal.strMealThumb}
              alt="food image"
              className="w-full rounded-lg"
            />
            <div className="flex flex-wrap mb-5">
              <p className="font-bold w-full sm:w-1/3 p-2">
                Category:
                <span className="font-semibold">{meal.strCategory}</span>
              </p>
              <p className="font-bold w-full sm:w-1/3 p-2">
                Area: <span className="font-semibold">{meal.strArea}</span>
              </p>
              <p className="font-bold w-full sm:w-1/3 p-2">
                Tags: <span className="font-semibold">{meal.strTags}</span>
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-center text-3xl font-bold text-orange-500">
                Instructions
              </h3>
              <p className="my-3 text-justify">{meal.strInstructions}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex justify-center w-full flex-col">
                <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                <ul className="text-gray-900 list-disc pl-5">
                  {renderList('strIngredient', meal)}
                </ul>
              </div>
              <div className="flex justify-center  w-full flex-col">
                <h3 className="text-lg font-bold mb-2">Measures</h3>
                <ul className="text-gray-900 list-disc pl-5 items-center">
                  {renderList('strMeasure', meal)}
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <iframe
                width="560"
                height="315"
                src={meal.strYoutube.replace('watch?v=', 'embed/')}
                allowFullScreen
                className="mb-2 px-4"
              />
            </div>
            <p className="text-sm text-center mt-6">
              <Link
                to={meal.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline "
              >
                ORIGINAL FONT
              </Link>
            </p>
          </div>
        ))
      )}
    </>
  );
};

export default MealRevenue;
