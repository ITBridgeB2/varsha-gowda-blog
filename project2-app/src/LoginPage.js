import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogService from './BlogService';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mainStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2fd', // Soft blue background
    fontFamily: 'Poppins, sans-serif',
  };

  const formContainerStyle = {
    backgroundColor: '#ffffff',
    padding: '35px 40px',
    borderRadius: '10px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '2px solid #b0bec5',
    fontSize: '16px',
    transition: 'border 0.3s ease',
  };

  const inputFocusStyle = {
    border: '2px solid #0288d1', // Blue focus border
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '30px',
    backgroundColor: '#0288d1', // Blue button
    color: '#ffffff',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0277bd', // Darker blue on hover
    transform: 'scale(1.05)', // Slight button scaling effect
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    blogService.validateBlog(email, password)
      .then((response) => {
        if (response.status === 200) {
          alert("Welcome: " + response.data.name);
          console.log('Email:', email);
          console.log('Password:', password);
          navigate('/');
        } else {
          alert("User not found");
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        alert('Login failed');
      });
  };

  return (
    <div>
      <main style={mainStyle}>
        <div style={formContainerStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#0288d1' }}>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => (e.target.style.border = inputFocusStyle.border)}
              onBlur={(e) => (e.target.style.border = '#b0bec5')}
            />
            <input
              type="password"
              placeholder="Password"
              required
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => (e.target.style.border = inputFocusStyle.border)}
              onBlur={(e) => (e.target.style.border = '#b0bec5')}
            />
            <button
              type="submit"
              style={buttonStyle}
              onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#0288d1')}
              onMouseDown={(e) => (e.target.style.transform = 'scale(1)')}
              onMouseUp={(e) => (e.target.style.transform = 'scale(1.05)')}
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
