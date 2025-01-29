const express = require('express');
const Material = require('../models/material'); 
const router = express.Router();

// Route to open home.ejs
router.get('/dashboard', (req, res) => {
    res.render('home');
});

// Route to open add-material.ejs
router.get('/add-material', (req, res) => {
    res.render('add-material');
});

// Route to open materials.ejs
router.get('/viewmaterials', (req, res) => {
    res.render('materials');
});

// Route to open update-material.ejs
router.get('/update-material', (req, res) => {
    res.render('update-material');
});

// Route to open report and analytics
router.get('/report', async (req, res) => {
  try {
    // Fetch all materials
    const materials = await Material.find();

    // Prepare data for Material Summary Pie Chart
    const materialSummary = materials.map(m => ({
      name: m.name,
      quantity: m.quantity,
    }));

    // Filter materials with "Low Stock" status and prepare data for Low Stock Bar Chart
    const lowStockMaterials = materials.filter(m => 
      m.quantity < (m.minstocklevel || 0) // Default minstocklevel to 0 if not set
    );
    const lowStockSummary = lowStockMaterials.map(m => ({
      name: m.name,
      quantity: m.quantity,
    }));

    // Group by supplier for Supplier Bar Chart
    const supplierSummary = await Material.aggregate([
      {
        $group: {
          _id: "$supplier",
          totalMaterials: { $sum: 1 },
        },
      },
    ]);

    // Render the report page with the prepared data
    res.render('report', {
      materialSummary,
      lowStockSummary,
      supplierSummary,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while generating the report.");
  }
});

module.exports = router;
