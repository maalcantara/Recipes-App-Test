import { useEffect, useState } from 'react';
import { fetchAllRevenues } from '../API';
import { AllRevenue } from '../types';

export const useGetAllRevenue = (idParam: string | null) => {
  const [meals, setMeals] = useState<AllRevenue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllRevenues(idParam)
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
  }, [idParam]);

  return { meals, loading, error };
};
