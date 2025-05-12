import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogService from './BlogService';

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    blogService.saveBlogDetails(formData).then(() => {
      alert('Registered successfully!');
      navigate('/');
    });

    console.log('Form submitted:', formData);
  };

  const mainStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1f5fe', // Soft blue background
    fontFamily: 'Poppins, sans-serif',
  };

  const formContainerStyle = {
    backgroundColor: '#ffffff',
    padding: '35px 40px',
    borderRadius: '10px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    width: '360px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '18px',
    borderRadius: '10px',
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
    backgroundColor: '#0288d1', // Bright blue button
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

  const headerStyle = {
    marginBottom: '30px',
    fontSize: '24px',
    fontWeight: '600',
    color: '#0288d1', // Blue header
  };

  return (
    <div>
      <main style={mainStyle}>
        <div style={formContainerStyle}>
          <h2 style={headerStyle}>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.border = inputFocusStyle.border)}
              onBlur={(e) => (e.target.style.border = '#b0bec5')}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.border = inputFocusStyle.border)}
              onBlur={(e) => (e.target.style.border = '#b0bec5')}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.border = inputFocusStyle.border)}
              onBlur={(e) => (e.target.style.border = '#b0bec5')}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              style={inputStyle}
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
              Register
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default RegisterPage;
