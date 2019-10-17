import React , { useState , useEffect } from 'react';
import axios from 'axios'
//import reactstrap, { Button } from 'reactstrap';

export default function CharacterCard(props) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then( res => {
      const person = res.data.results[props.item]
      console.log(person)
      setName(person.name)
      
      setImage(person.image)
      console.log('image=',person.image)
    })
    .catch( err => {
      console.log("Error:", err);
    })
  },[])
    
  return(
    <div>
      <p color='danger' style={{color:'blue'}} >{name}</p>
      <img src={image}></img>
    </div>
  )
}
