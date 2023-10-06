import { useEffect, useState } from 'react';
import { fetchLatestMeals } from '../API';
import { AllIngredients } from '../types';

export const useGetRevenues = (searchParam: string | null) => {
  const [meals, setMeals] = useState<AllIngredients[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLatestMeals(searchParam)
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
  }, [searchParam]);

  return { meals, loading, error };
};
