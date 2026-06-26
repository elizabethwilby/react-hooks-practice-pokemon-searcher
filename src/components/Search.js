import React from "react";

function Search( {setSearchTerm }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"
          placeholder= "search Pokemon..."
          onChange={e => setSearchTerm(e.target.value)} 
          />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
