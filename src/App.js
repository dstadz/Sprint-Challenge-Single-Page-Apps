import React , { useState , useEffect } from 'react';
import axios from 'axios'
//import reactstrap, { Button } from 'reactstrap';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'


export default function App() {
  
  return (
    <main>
      <Header />
      <CharacterList />
    </main>
  );
}
