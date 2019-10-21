import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function SearchForm() {
    // searchTerm will save the data from the search input on every occurance of the change event.
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
      axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setData(response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        ));
      })
      .catch( err => {
        console.log(err);
      })
    }, [query]);

    const handleInputChange = e => {
      setQuery(e.target.value);
    }

    return (
      <div className="character">
        <form className="search">        
          <input 
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={ query }
          onChange={ handleInputChange } />
        </form>
        {data.map(char => {          
          return( <CharacterCard 
            key={char.id} 
            name={ char.name }
            image={ char.image }
          /> )
        })}
      </div>
    )
};
