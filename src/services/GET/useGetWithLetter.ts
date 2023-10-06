import { useEffect, useState } from 'react';
import { fetchLetterMeals } from '../API';
import { MealByLetter } from '../types';

export const useGetWithLetter = (letterParam: string | null) => {
  const [meals, setMeals] = useState<MealByLetter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLetterMeals(letterParam)
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
  }, [letterParam]);

  return { meals, loading, error };
};
