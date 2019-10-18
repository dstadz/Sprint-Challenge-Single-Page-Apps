import React , { useState , useEffect } from 'react';
import axios from 'axios'
//import reactstrap, { Button } from 'reactstrap';
import Location from './LocationCard'

export default function LocationList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  
  

  const nums = [...Array(5).keys()];

  const listItems = nums.map((item, index) => {
    return( <Location key={index} item={item}/> )
  })
 { return (
    <section className="Location-list">
      <h1>TODO: `array.map()` over your state here!</h1>
      {listItems}
    </section>
 );}
}
