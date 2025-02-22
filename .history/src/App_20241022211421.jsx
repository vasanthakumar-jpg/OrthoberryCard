import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Container from './components/Container';
import Article from './components/Article';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="content-container">
        <Content />
      </div>
    </Router>
  );
}

const Content = () => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.startsWith('/article/') && <Banner />}
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </>
  );
};

export default App;
