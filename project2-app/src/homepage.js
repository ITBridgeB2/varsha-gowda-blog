import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const mainContainerStyle = {
    padding: '60px 30px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'pink',
    fontFamily: '"Roboto", sans-serif',
  };

  const cardStyle = {
    width: '320px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#444',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    cursor: 'pointer',
    overflow: 'hidden',
    margin: '15px',
    border: '2px solid #e0e0e0',
  };

  const cardImageStyle = {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  };

  const cardContentStyle = {
    padding: '25px',
  };

  const cardTitleStyle = {
    fontSize: '24px',
    fontWeight: '500',
    color: '#ff6347', // Tomato Red color
    marginBottom: '12px',
  };

  const cardTextStyle = {
    fontSize: '16px',
    color: '#333',
    lineHeight: '1.6',
  };

  return (
    <div>
      <div style={mainContainerStyle}>
        <Link to="/TravelPage" style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9Tl5-F7pCOl5RqtVNNzGaa2uXhnNkCmW0A&s"
            alt="Travel"
            style={cardImageStyle}
          />
          <div style={cardContentStyle}>
            <h2 style={cardTitleStyle}>Travel Blogs</h2>
            <p style={cardTextStyle}>
              Discover stunning destinations and travel tales from around the world.
            </p>
          </div>
        </Link>

        <Link to="/FitnessPage" style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4h0dS9EXDHE9OC5wXj0D5VaYqByUA0anBrw&s"
            alt="Fitness"
            style={cardImageStyle}
          />
          <div style={cardContentStyle}>
            <h2 style={cardTitleStyle}>Fitness Blogs</h2>
            <p style={cardTextStyle}>
              Achieve your fitness goals with tips, challenges, and motivation.
            </p>
          </div>
        </Link>

        <Link to="/RacingPage" style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCENM80LKgXrMb7nc5VRsLhbHoJ4YNolO9kA&s"
            alt="Racing"
            style={cardImageStyle}
          />
          <div style={cardContentStyle}>
            <h2 style={cardTitleStyle}>Racing Blogs</h2>
            <p style={cardTextStyle}>
              Fasten your seatbelt and dive into the world of high-speed racing.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
