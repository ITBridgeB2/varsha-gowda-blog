import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import FitnessPage from './FitnessPage';
import RacingPage from './RacingPage';
import Register from './RegisterPage';
import Login from './LoginPage';
import HomePage from './homepage';
import TravelPage from './traveling';

function App() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00796b', // Deep teal background
    padding: '15px 30px',
    color: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const navStyle = {
    display: 'flex',
    gap: '25px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#ffb74d', // Light amber color for hover
  };

  return (
    <>
      <header style={headerStyle}>
        <div>
          <Link to="/" style={{ ...linkStyle, fontSize: '30px', fontWeight: '700' }}>
            My Blog
          </Link>
        </div>
        <nav style={navStyle}>
          <Link
            to="/register"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Register
          </Link>
          <Link
            to="/login"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Login
          </Link>
        </nav>
      </header>
      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/TravelPage" element={<TravelPage />} />
          <Route path="/FitnessPage" element={<FitnessPage />} />
          <Route path="/RacingPage" element={<RacingPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

function Home() {
  const linkStyle = {
    display: 'block',
    margin: '15px 0',
    fontSize: '20px',
    color: '#00796b',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#ffb74d', // Light amber for hover effect
  };

  return (
    <div>
      <h2 style={{ color: '#00796b' }}>Welcome to My Blog</h2>
      <Link
        to="/travel"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
      >
        Travel Blogs
      </Link>
      <Link
        to="/food"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
      >
        Food Blogs
      </Link>
      <Link
        to="/fashion"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
      >
        Fashion Blogs
      </Link>
    </div>
  );
}

export default App;
