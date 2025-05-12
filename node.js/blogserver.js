import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const blogapp = express();

// Middleware
blogapp.use(cors());
blogapp.use(express.json());
blogapp.use(express.urlencoded({ extended: true }));

// MySQL Database connection
let db;
try {
  db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql',
  });
  console.log('Connected to MySQL');
} catch (err) {
  console.error('Database connection failed:', err);
  process.exit(1);
}

// Register - POST method
blogapp.post('/blogs', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) 
    return res.status(400).json({ message: 'All fields are required' });

  try {
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    await db.execute(sql, [name, email, password]); // Store the plain password

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

blogapp.get('/blogs/:email/:password', async (req, res) => {
    const {email, password } = req.params;
  
    try {
      const [result] = await db.execute(
        'SELECT name FROM users WHERE email= ? AND password = ?',
        [email, password]
      );
  
      if (result.length === 0) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      return res.status(200).json({name: result[0].name });
    } catch (err) {
      console.error('Login error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

// Start the server
blogapp.listen(9898, () => {
  console.log('Server is running on port 9898');
});