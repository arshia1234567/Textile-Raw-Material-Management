const express = require('express');
const User = require('../models/user'); // Import the User model
const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password }); // Store password as plaintext
    await newUser.save();
    res.redirect('/');

  } catch (err) {
    res.status(400).json({ message: 'Error registering user', error: err.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user && user.password === password) {
        res.redirect('/dashboard'); // Redirect to dashboard after successful login
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Error logging in', error: err.message });
    }
  });
  

module.exports = router;
