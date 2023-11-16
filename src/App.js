import './App.css';
import './style.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './@components/Navbar';
import Footer from './@components/Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Particle from './@components/Particle';
import { useEffect, useState } from 'react';
import Loading from './@components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loading loadingClass={'loading-container-initial'} /> : null}
      <Particle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
