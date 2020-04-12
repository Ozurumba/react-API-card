import React from 'react';

const SearchBox = ({onSearch, searchChange}) => {
    return (
        <div className='pa2'>
        
        <input type="search" id="searchInput" onChange={onSearch} placeholder="search users"/>
        <button type="button"><i class="fas fa-arrow-right">➥</i></button>
         
        </div>
    );
}

export default SearchBox;