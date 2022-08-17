import React from 'react';

// Usage of destructuring in ({...}} - allows us to grab the props object and grab its properties.
const SearchBox = ({searchfield, searchChange}) => {
    return (
        //className pa2 using tachyons
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;