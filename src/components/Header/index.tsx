import { Link, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <header className="headerComponent bg-white shadow h-16 flex justify-between items-stretch">
        <Link
          to="/"
          className="router-link-active inline-flex items-center h-full px-5 text-orange-500 font-bold"
        >
          Home
        </Link>
        <div className="flex items-center gap-1">
          <Link
            to="/by-"
            className="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
          >
            Search recipes
          </Link>
          <Link
            to="/by-letter"
            className="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
          >
            Recipes by letter
          </Link>
          <Link
            to="/ingredients"
            aria-current="page"
            className="router-link-active router-link-exact-active inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
          >
            Recipes by ingredients
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
