import React, { useState } from 'react';
import './css/main.css';
import Gallery from './components/gallary';
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
    
    <nav className="topics-grid">
  {topics.map((topic, index) => (
    <div key={index} className="topic-card">
      <div className="image-container">
        <img src={topic.image} alt={topic.title} />
        <h3 className="topic-title">{topic.title}</h3>
      </div>
    </div>
  ))}
</nav>

      <section className={`snapshots ${view}`}>
        <div className='snap-container'>
          <div className='snap-title'>
          <h2>Snapshots</h2>
          </div>
          <div className="view-toggle">
          <button onClick={() => setView('list')} className={view === 'list' ? 'active' : ''}>
          List View
            {/* <img src="./assets/list-view.svg" alt="List View" /> */}
          </button>
          <button onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''}>
            {/* <img src="./assets/grid-view.svg" alt="Grid View"  /> */}
            Grid View
          </button>
        </div>

        </div>
       
        {view === 'list' ? (
          <div className={`snapshot-container ${view}`}>
            {snapshots.slice((currentPage - 1) * 3, currentPage * 3).map((snapshot, index) => (
              <div key={index} className="snapshot-card">
                <div className='picture'>
                <img src={snapshot.image} alt={snapshot.title} />
                </div>
                <div className="snapshot-info">
                  <h3>{snapshot.title}</h3>
                  <p>{snapshot.description}</p>
                  <span>Source: {snapshot.source}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <InfiniteScroll
            dataLength={snapshotsToShow} 
            next={fetchMoreData} 
            hasMore={snapshotsToShow < snapshots.length} 
            loader={<h4>Loading...</h4>}
          >
            <Gallery snapshots={snapshots.slice(0, snapshotsToShow)} />
          </InfiniteScroll>
        )}

        {view === 'list' && (
          <div className="pagination">
          <button className='prev-btn' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <i className="fas fa-chevron-left"></i> 
          </button>
          {[1, 2, 3, 4].map(page => (
            <button
              key={page}
              className={page === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button className='next-btn' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === 4}>
            <i className="fas fa-chevron-right"></i> 
          </button>
        </div>
        
        )}
      </section>
    </div>

    </div>
  );
}

export default App;

