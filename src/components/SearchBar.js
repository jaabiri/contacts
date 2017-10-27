import React from 'react';
import "./../App.css";

const SearchBar = (props) => {
    const handelChange = function(e){
         props.change(e)
    }
    return (
        <div className="navbar"> 
            <input type="text" className="search" onChange={handelChange} placeholder="Search"/>
             <i id="fa"className="fa fa-search fa-4" aria-hidden="true"></i>
        </div>
    );
};

export default SearchBar;