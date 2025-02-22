import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/main.css'
import Header from './components/Header';

function App() {


  return (
    <Router>
      <div className="app">
        <Header/> 
      </div>
    </Router>
  );
}
 
export default App;        