import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import Header from './components/header'

function App() {
  return (
    <div className="container" >
      
      <Header/>
        <Movie/>
    </div>
  );
}

export default App;
