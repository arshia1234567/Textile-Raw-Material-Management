const express = require('express');
const mongoose = require('mongoose');
const materialRoutes = require('./routes/materialRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const userRoutes = require('./routes/userRoutes');


const Material = require('./models/material');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/new')
  .then(() => console.log('MongoDB database connection established successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// Middleware
app.get('/', (req, res) => {
  res.render('login'); // Render the login page by default
});

app.use(express.json());
app.use('/api', materialRoutes);
app.use('/api', supplierRoutes);
app.use('/user', userRoutes); // Add route for user registration and login
app.use('/', require('./routes/basicroutes'));

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/login', (req, res) => {
  res.render('login');
});

// Route to render the materials page
app.get('/materials', async (req, res) => {
  try {
    const materials = await Material.find(); 
    res.render('materials', { materials: materials });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
