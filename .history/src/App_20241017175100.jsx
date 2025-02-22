import React, { useState } from 'react';
import '../src/App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Body from './components/Body';

function App() {

  return (
    <div className="app">
     <Header/>
     <Navbar/>
    <div className='body'>
    <Banner/>
    {/* <Body/> */}
    </div>

    </div>
  );
}

export default App;

