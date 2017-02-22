import React from 'react';

const SearchBar = (props) => {
    const handelChange = function(e){
         props.change(e)
    }
    return (
        <div> 
            
             <input type="text" onChange={handelChange}/>
        </div>
    );
};

export default SearchBar;