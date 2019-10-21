import React , { useState , useEffect } from 'react';
import axios from 'axios'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components'


export default function LocationCard({ name, type, dimension, residents }) {

  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [dimension, setDimension] = useState('')
  const [residents, setResidents] = useState('')

  //collect api data, set state
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
  
  const Card = styled.div`
  padding: 10px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: white;
  background: green;
  width: 300px
  `;  
  const CardBody = styled.div`
  padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: white;
  background: blue;
  `;
  const CardImg = styled.img`
  top width="300px"
  margin: 5px;
  border: none;
  border-radius: 3px;
  `;
 
    
  return(
    <div>
    <Card>
      <CardImg  src={image} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
      </CardBody>
    </Card>
  </div>
  )
}
