import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-black">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        <div>
          <Link to="/">
            <img src="https://www.spacex.com/static/images/share.jpg" className="object-cover h-24 w-96" alt="logo" />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-500 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/space" className="text-white hover:text-gray-500 transition duration-200">
              Space
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-500 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-500 transition duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
