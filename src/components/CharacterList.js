import React , { useState , useEffect } from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);
  // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then( res => {
      const person = res.data.results;
      setCharacterData(person)
    })
    .catch( err => {
      console.log("Error:", err);
    })
  },[]);
    
    

  return (
    <section className="character-list">
      {characterData.map((char => {
        return <CharacterCard 
        key={char.id} 
        name={char.name} 
        image={char.image} 
        />
      }))}
    </section>
    );
}
