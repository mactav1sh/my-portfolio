import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Project from './components/pages/Project';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  // Adds dark classes to body element to use tailwind class based dark mode
  useEffect(() => {
    document.body.classList.add(
      'dark:bg-darkBlue-900',
      'dark:text-white',
      'text-darkGrey-500'
    );
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/:projectName" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
