import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">
        OrthoBerry
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-1/2 mt-3 md:mt-0">
        <form onSubmit={handleSubmit} className="flex items-center bg-gray-100  px-4 py-2">
          <input
            type="text"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="Search for posts"
            value={searchTerm}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />
          <button type="submit" className="text-gray-600 hover:text-gray-800 ml-2">
            <FaSearch />
          </button>
        </form>
      </div>

    </header>
  );
};

export default Header;
