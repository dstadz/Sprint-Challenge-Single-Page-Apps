import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { Formik, Form, Field } from 'formik';


export default function SearchForm() {
 
  return (
    <Formik
      onSubmit ={(values, tools) => {
        tools.resetForm();
        
      //   useEffect(() => {
      //   axios.get(`https://rickandmortyapi.com/api/character/`)
      //   .then( res => {
      //     const person = res.data.results[props.item]
      //     setName(person.name)      
      //     setImage(person.image)
      //   })
      //   .catch( err => {
      //     console.log("Error:", err);
      //   })
      // },[])















      }}
      initialValues={{ name:''}}
      render={props => {''
      return (
        <Form>
          <Field name='name' type='text' placeholder='name' />
          <input type='submit' />
        </Form>
      )
    }
      }
    />
  );
}