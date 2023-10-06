import { useEffect, useState } from 'react';
import { fetchIngredients } from '../API';
import { Ingredients } from '../types';

export const useGetIngredients = () => {
  const [meals, setMeals] = useState<Ingredients[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchIngredients()
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
