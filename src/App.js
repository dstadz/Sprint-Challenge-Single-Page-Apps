import React from 'react';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from './components/CharacterList'
import SearchForm from "./components/SearchForm";
import {BrowserRouter, Route, Link } from 'react-router-dom'



export default function App() {
  return (
    <main>
      <Header />
      
      <BrowserRouter />
        <Link to ='/'>Hello</Link>
        <Link to ='/CharacterList'>People</Link>

        
        <Route exact path='/' component={ WelcomePage } />
        <Route 
          path='/CharacterList' 
          component={() => <CharacterList />}
        />
      <BrowserRouter />
    </main>
  );
}
