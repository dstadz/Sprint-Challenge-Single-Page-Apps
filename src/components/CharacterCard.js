import React from 'react';
import { CardTitle } from 'reactstrap';
import styled from 'styled-components'


export default function CharacterCard(props) {
  const name = props.name
  const image = props.image
  
  //styles
  const Card = styled.div`
  padding: 10px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: white;
  background: green;
  width: 300px`;  

  const CardBody = styled.div`
  padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: white;
  background: blue;`;
  
  const CardImg = styled.img`
  top width="300px"
  margin: 5px;
  border: none;
  border-radius: 3px;`;
 
    
  return(
    <div>
    <Card>
      <CardImg src={ image } />
      <CardBody>
        <CardTitle>{ name }</CardTitle>
      </CardBody> 
    </Card>
  </div>
  )
}
