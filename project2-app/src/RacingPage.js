import React, { useState } from 'react';

function RacingPage() {
  const [showBlogs, setShowBlogs] = useState(false);

  const blogs = [
    {
      id: 1,
      title: 'Formula 1: 2025 Season Preview',
      content: 'Get ready for another thrilling year of Formula 1 racing...',
      created_at: '2025-05-08T14:31:23Z',
    },
    {
      id: 2,
      title: 'Top 5 Street Racing Legends',
      content: 'A tribute to the most iconic names in underground racing...',
      created_at: '2025-05-08T14:58:23Z',
    },
    {
      id: 3,
      title: 'MotoGP: Riders to Watch',
      content: 'Meet the rising stars in motorcycle racing this year...',
      created_at: '2025-05-08T14:58:23Z',
    },
    {
      id: 4,
      title: 'Racing Simulators for Pros',
      content: 'The best gear and games for virtual race training...',
      created_at: '2025-05-08T14:58:23Z',
    },
    {
      id: 5,
      title: 'History of Le Mans',
      content: 'Explore the legacy and endurance of the 24 Hours of Le Mans...',
      created_at: '2025-05-08T14:58:23Z',
    },
  ];

  const containerStyle = {
    maxWidth: '850px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '34px',
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: '35px',
    fontWeight: '700',
  };

  const blogCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '25px',
    marginBottom: '30px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const blogCardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const blogTitleStyle = {
    fontSize: '26px',
    fontWeight: 'bold',
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
    backgroundColor: '#d32f2f',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    marginBottom: '40px',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#e53935',
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
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#d32f2f')}
        onMouseDown={(e) => (e.target.style.transform = 'scale(1)')}
        onMouseUp={(e) => (e.target.style.transform = 'scale(1.05)')}
      >
        Racing Blogs
      </button>
      {showBlogs && (
        <>
          <h2 style={headingStyle}>Racing News & Updates</h2>
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
            <p style={{ textAlign: 'center', color: '#999' }}>No racing blogs available.</p>
          )}
        </>
      )}
    </div>
  );
}

export default RacingPage;
