import { Card } from '../components/UI/Card';
import { FaRandom } from 'react-icons/fa';
import { useGetRandomMeals } from '../services/GET/useGetRandom';
import { Title } from '../components/UI/Title';
import { Loading } from '../components/UI/Loading';

const MealHome: React.FC = () => {
  const { meals, loading, error } = useGetRandomMeals();

  return (
    <main className="h-[90vh] bg-gray-100">
      <Title icon={<FaRandom size={25} />} text="Random Recipes" />
      {loading ? (
        <Loading />
      ) : (
        <>
          {error ? (
            <h1>Nenhum resultado encontrado.</h1>
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

export default MealHome;
