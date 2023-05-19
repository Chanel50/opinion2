import React, { useState } from 'react';
import '../styles/Search.css';
import axios from 'axios';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/cruds/search', {
          params: {
            titre: searchText,
            contenu:searchText

            
          }
        });
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <div className='container8'>
        <input className='iser'
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by title"
        />
        <button className='ser' onClick={handleSearch}>Search</button>
        </div>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <h3>{result.titre}</h3>
              <p>{result.contenu}</p>
            </li>
            
          ))}
        </ul>
      </div>
    );
  };
  

export default Search;

