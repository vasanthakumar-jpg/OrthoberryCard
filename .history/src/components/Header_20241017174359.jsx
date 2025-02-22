import { useState } from 'react';

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
   <>
   <div className="header-container">
    <div className="logo">
        OrthoBerry
    </div>
    <div className="searchBar">
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          autoComplete='off'
          placeholder="Search for posts"
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
        <button id="searchIcon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </form>
      </div>
    {/* <div className="search-bar">
      <form onSubmit={handleSubmit}>
       <div className="search">
        <input
            type="text"
            placeholder="Search for posts"
            value={searchTerm}
            onChange={handleChange}
            className="search-input"
            />
        <span class="fa fa-search search-icon"></span>
       </div>
      </form>
    </div> */}
   </div>
   </>
  )
}

export default Header