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

  const amount = 5
  return (
    <section className="character-list">
      {[...Array(amount).keys()].map((i, key) => {
    return( <Character index={i} key={key} /> )
  })}
    </section>
    );
}
