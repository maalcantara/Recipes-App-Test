import { useEffect, useState } from 'react';
import { fetchRecipesByIngredients } from '../API';
import { MealByIngredients } from '../types';

export const useGetRecipesByIngredients = (ingredientParam: string | null) => {
  const [meals, setMeals] = useState<MealByIngredients[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRecipesByIngredients(ingredientParam)
      .then((data) => {
        setMeals(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
        setLoading(false);
        setError('Erro ao buscar dados da API.');
      });
  }, [ingredientParam]);

  return { meals, loading, error };
};
