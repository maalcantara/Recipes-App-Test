import { Header } from './components/Header';
import MealLetter from './pages/MealLetter';
import MealIngredients from './pages/MealIngredients';
import { Route, Routes } from 'react-router-dom';
import MealHome from './pages/MealHome';
import RecipesByIngredients from './pages/RecipesByIngredient';
import MealRevenue from './pages/MealRevenue';
import MealSearch from './pages/MealSearch';
import { Error404 } from './pages/404';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<MealHome />} />
          <Route path="by-" element={<MealSearch />} />
          <Route path="by-letter" element={<MealLetter />} />
          <Route path="ingredients/" element={<MealIngredients />} />
          <Route
            path="by-ingredient/:ingredient"
            element={<RecipesByIngredients />}
          />
          <Route path="meal/:id" element={<MealRevenue />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
