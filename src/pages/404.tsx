import { BiSolidErrorAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-8 space-y-6">
        <div className="flex justify-center items-center">
          <BiSolidErrorAlt size={50} style={{ color: 'orange' }} />
        </div>
        <div className="text-center space-y-4 px-4">
          <h1 className="text-2xl font-bold text-orange-500">Error 404</h1>
          <p className="text-gray-600 px-4">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded transition duration-300 ease-in-out transform hover:scale-105"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};
