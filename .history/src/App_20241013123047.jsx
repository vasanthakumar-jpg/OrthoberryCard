import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
import './css/main.css'
// import TopicsPage from './components/TopicsPage';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
// import TopicCarousel from './components/nav';
// import Carousel from './components/nav';
// import CarouselNavbar from './components/nav';
// import TopicsPage from './components/TopicsPage';
// import TopicSection from './components/nav';
// import Snapshots from './components/card';
// import TopicsPage from './components/TopicsPage';
import CarouselNavbar from './components/nav';
import Gallery from './components/gallary';
import TabNav from './components/nav';

// import Card from './components/card';
// import SnapshotsPage from './components/SnapshotsPage';
 
function App() {

  // const cardData = [
  //   {
  //     title: 'Post Title 1',
  //     content: 'This is the content for post 1.',
  //     imageUrl: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     title: 'Post Title 2',
  //     content: 'This is the content for post 2.',
  //     imageUrl: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     title: 'Post Title 3',
  //     content: 'This is the content for post 3.',
  //     imageUrl: 'https://via.placeholder.com/150',
  //   },
  // ];
  return (
    <Router>
      <div className="app">
        <Header/>
        <Navbar/>
        {/* <div className="banner-container">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} imageUrl={card.imageUrl} />
        ))}
      </div> */}
      <div className='body'>
      <Banner/>
        <TabNav/>
        {/* <CarouselNavbar/> */}
      {/* <TopicsPage/> */}
       <Gallery/>
      </div>
        {/* <Snapshots/> */}
        {/* Header/NavBar */}
       {/* <header className="navbar">
          <div className="navbar-left">
            <h1>Orthoberry</h1>
          </div>
          <nav className="navbar-right">
            <Link to="/">Home</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/snapshots">Snapshots</Link>
          </nav>
        </header> */}
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<TopicsPage />} />
        </Routes> */}
      </div>
    </Router>
  );
}
 
export default App;        