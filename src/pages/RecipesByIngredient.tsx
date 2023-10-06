import { Card } from '../components/UI/Card';
import { Title } from '../components/UI/Title';
import { BiSearchAlt } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useGetRecipesByIngredients } from '../services/GET/useGetRecipesByIngredients';
import { Loading } from '../components/UI/Loading';

const RecipesByIngredients: React.FC = () => {
  const params = useParams<{ ingredient: string }>();
  const ingredient = String(params.ingredient);
  const { meals, loading, error } = useGetRecipesByIngredients(ingredient);
  console.log(meals, 'jajajaj');
  return (
    <main className="bg-gray-00">
      <Title
        icon={<BiSearchAlt size={25} />}
        text={`Receitas com ${ingredient}`}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          {error ? (
            <h1>Nenhum Resultado Encontrado...</h1>
          ) : (
            <ul className="justify-center flex gap-4 px-8 flex-wrap">
              {meals.map((meal, index) => (
                <Card
                  id={meal.idMeal}
                  strMealThumb={meal.strMealThumb}
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

export default RecipesByIngredients;
