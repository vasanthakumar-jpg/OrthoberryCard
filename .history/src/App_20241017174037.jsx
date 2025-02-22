import React, { useState } from 'react';
import '../src/index.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [view, setView] = useState('grid'); 
//   const [snapshotsToShow, setSnapshotsToShow] = useState(3); 

//   const snapshots = [
//     {
//       title: "Promoting Dental Health: A Doctor’s Guide for Kids",
//       description: "In today's orthodontic practices, metal braces remain a popular and effective solution...",
//       source: "Roger Levin",
//       image: g1,
//     },
//     {
//       title: "Understanding Metal Braces: A Guide for Parents and Kids",
//       description: "In a friendly orthodontic clinic, a knowledgeable doctor educates parents...",
//       source: "LeAnn Peniche",
//       image: g2,
//     },
//     {
//       title: "The Role of Metal Braces in Modern Orthodontics",
//       description: "In today's orthodontic practices, metal braces remain a popular and effective solution...",
//       source: "Golden Age of Orthodontics",
//       image: g3,
//     },
//   ];

//   const topics = [
//     { title: 'Collections', image: topicImage },
//     { title: 'Case Acceptance', image: topicImage },
//     { title: 'Softwares', image: topicImage },
//     { title: 'Appliances', image: topicImage },
//   ];

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= 4) {
//       setCurrentPage(page);
//     }
//   };

//   const fetchMoreData = () => {
//     setSnapshotsToShow(snapshotsToShow + 3);
//   };

  return (
    <div className="app">
     <Header/>
     <Navbar/>
    <div className='body'>
    <Banner/>
    
    {/* <nav className="topics-grid">
  {topics.map((topic, index) => (
    <div key={index} className="topic-card">
      <div className="image-container">
        <img src={topic.image} alt={topic.title} />
        <h3 className="topic-title">{topic.title}</h3>
      </div>
    </div>
  ))}
</nav> */}
    </div>

    </div>
  );
}

export default App;

