import axios from 'axios';

export const fetchLatestMeals = async (searchQuery: string | null = null) => {
  try {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${
      searchQuery || ''
    }`;
    const response = await axios.get(apiUrl);
    const data = response.data.meals;

    if (!data) {
      throw new Error('Nenhum resultado encontrado.');
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};
export const fetchRandomMeals = async () => {
  try {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await axios.get(apiUrl);
    const data = response.data.meals;

    if (!data) {
      throw new Error('Nenhum resultado encontrado.');
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};

export const fetchLetterMeals = async (letterQuery: string | null = null) => {
  try {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${
      letterQuery || ''
    }`;

    const response = await axios.get(apiUrl);
    const data = response.data.meals;

    if (!data) {
      throw new Error('Nenhum resultado encontrado.');
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};
export const fetchIngredients = async () => {
  try {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const response = await axios.get(apiUrl);
    const data = response.data.meals;

    if (!data) {
      throw new Error('Nenhum resultado encontrado.');
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};
export const fetchRecipesByIngredients = async (
  ingredientQuery: string | null = null
) => {
  try {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientQuery}`;
    const response = await axios.get(apiUrl);
    const data = response.data.meals;

    if (!data) {
      throw new Error('Nenhum resultado encontrado.');
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};
export const fetchAllRevenues = async (idQuery: string | null = null) => {
  try {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idQuery}`;
    const response = await axios.get(apiUrl);
    const data = response.data.meals;

    if (!data) {
      throw new Error('Nenhum resultado encontrado.');
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};
