import { useEffect, useState } from 'react';
import { fetchRandomMeals } from '../API';
import { RandomRecipes } from '../types';

export const useGetRandomMeals = () => {
  const [meals, setMeals] = useState<RandomRecipes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRandomMeals()
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
  }, []);

  return { meals, loading, error };
};
