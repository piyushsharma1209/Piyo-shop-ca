import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();

    const handleSearch = () => {
        // Implement search logic here
        history.push(`/product?search=${searchInput}`);
    };

    return (
        <div>
            <input
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Search"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
