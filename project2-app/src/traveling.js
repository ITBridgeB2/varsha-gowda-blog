import React, { useState } from 'react';

function TravelPage() {
  const [showBlogs, setShowBlogs] = useState(false);

  const blogs = [
    {
      id: 1,
      title: 'Exploring the Alps',
      content: 'A journey through the majestic Alps...',
      created_at: '2025-05-08T14:31:23Z',
    },
    {
      id: 2,
      title: 'Wonders of the Sahara',
      content: 'Experiencing the vastness of the Sahara Desert...',
      created_at: '2025-05-08T14:58:23Z',
    },
    {
      id: 3,
      title: 'Backpacking Southeast Asia',
      content: 'Tips and tales from backpacking across Southeast Asia...',
      created_at: '2025-05-08T14:58:23Z',
    },
    {
      id: 4,
      title: 'Road Trip Across the USA',
      content: 'An unforgettable road trip from coast to coast...',
      created_at: '2025-05-08T14:58:23Z',
    },
    {
      id: 5,
      title: 'Discovering the Amazon Rainforest',
      content: 'Venturing into the heart of the Amazon...',
      created_at: '2025-05-08T14:58:23Z',
    },
  ];

  const containerStyle = {
    maxWidth: '850px',
    margin: '40px auto',
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f4ff',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '34px',
    color: '#2d3e50',
    textAlign: 'center',
    marginBottom: '40px',
    fontWeight: '700',
  };

  const blogCardStyle = {
    borderRadius: '12px',
    backgroundColor: '#fff',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const blogCardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 18px rgba(0, 0, 0, 0.2)',
  };

  const blogTitleStyle = {
    fontSize: '26px',
    fontWeight: '600',
    color: '#2a2a2a',
    marginBottom: '12px',
  };

  const blogContentStyle = {
    fontSize: '16px',
    color: '#555',
    marginBottom: '12px',
  };

  const blogDateStyle = {
    fontSize: '14px',
    color: '#999',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 25px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#2d3e50',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    textAlign: 'center',
    marginBottom: '30px',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#3e4b63',
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
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#2d3e50')}
        onMouseDown={(e) => (e.target.style.transform = 'scale(1)')}
        onMouseUp={(e) => (e.target.style.transform = 'scale(1.05)')}
      >
        View Travel Blogs
      </button>
      {showBlogs && (
        <>
          <h2 style={headingStyle}>Travel Blogs</h2>
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
            <p style={{ textAlign: 'center', color: '#888' }}>No travel blogs available.</p>
          )}
        </>
      )}
    </div>
  );
}

export default TravelPage;
