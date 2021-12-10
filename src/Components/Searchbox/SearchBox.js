import React from "react";

//The search box that just takes in a function
const SearchBox = ({searchChange}) => {
    return (
        <div className ='pa2 wrap'>
           <div className ='search'>
            <input className= "pa2 ba b--green searchTerm"
            type='search' placeholder='Search drinks' onChange={searchChange}></input>
            </div> 
        </div>
    );
}

export default SearchBox;