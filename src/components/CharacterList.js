import React , { useState , useEffect } from 'react';
import axios from 'axios'
//import reactstrap, { Button } from 'reactstrap';
import Character from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  

  const nums = [...Array(5).keys()];

  const listItems = nums.map((item, index) => {
    return( <Character key={index} item={item}/> )
  })
  return(listItems)
 {/* return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <Character />
    </section>
 );*/}
}
