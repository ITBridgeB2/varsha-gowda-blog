import React, { useState } from 'react';

function FitnessPage() {
  const [showBlogs, setShowBlogs] = useState(false);

  const blogs = [
    {
      id: 1,
      title: '10-Minute Full Body Workout',
      content: 'Get your heart pumping with this quick and effective routine...',
      created_at: '2025-05-08T14:31:23Z',
    },
    {
      id: 2,
      title: 'Yoga for Beginners',
      content: 'Ease into flexibility and mindfulness with these basic poses...',
      created_at: '2025-05-08T14:58:23Z',
    },
    {
      id: 3,
      title: 'Strength Training at Home',
      content: 'No gym? No problem! Build muscle with simple home exercises...',
      created_at: '2025-05-08T14:58:23Z',
    },
    {
      id: 4,
      title: 'Healthy Habits for a Fit Life',
      content: 'From sleep to hydration—daily habits that support your fitness...',
      created_at: '2025-05-08T14:58:23Z',
    },
    {
      id: 5,
      title: 'Stretching Techniques',
      content: 'Improve flexibility and avoid injury with proper stretching...',
      created_at: '2025-05-08T14:58:23Z',
    },
  ];

  const containerStyle = {
    maxWidth: '850px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#f1f8f3',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '34px',
    color: '#27ae60',
    textAlign: 'center',
    marginBottom: '30px',
    fontWeight: '700',
  };

  const blogCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '25px',
    marginBottom: '25px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const blogCardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const blogTitleStyle = {
    fontSize: '26px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '15px',
  };

  const blogContentStyle = {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px',
  };

  const blogDateStyle = {
    fontSize: '14px',
    color: '#888',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#27ae60',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    marginBottom: '35px',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2ecc71',
    transform: 'scale(1.05)',
  };

  const handleClick = () => {
    setShowBlogs(true);
  };

  return (
    <div style={containerStyle}>
      <button
        style={buttonStyle}
        onClick={handleClick}
        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#27ae60')}
        onMouseDown={(e) => (e.target.style.transform = 'scale(1)')}
        onMouseUp={(e) => (e.target.style.transform = 'scale(1.05)')}
      >
        Fitness Blogs
      </button>
      {showBlogs && (
        <>
          <h2 style={headingStyle}>Fitness Tips & Blogs</h2>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog.id}
                style={blogCardStyle}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              >
                <h3 style={blogTitleStyle}>{blog.title}</h3>
                <p style={blogContentStyle}>{blog.content}</p>
                <small style={blogDateStyle}>
                  Posted on: {new Date(blog.created_at).toLocaleDateString()}
                </small>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#999' }}>
              No fitness blogs available.
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default FitnessPage;
