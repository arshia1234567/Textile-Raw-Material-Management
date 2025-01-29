const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
  name: {
    type: String,
    enum: ['cotton', 'wool', 'rayon','polyester','nylon','silk'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['Yarn', 'fabric roll', 'Finished goods'],
    required: true
  },
  supplier: { 
    type: String, 
    enum: ['ThreadLine Associates', 'Premium Fabrics Ltd.', 'Global Textiles Co.'],
     required: true
     },
 
  minstocklevel:{
    type:Number
  },
  date: {
    type: Date,
    required: true
  },
status: {
    type: String,
    enum: ['Sufficient Stock', 'Low Stock'],
    
  },
  
  // Add more fields as needed
});

const Material = mongoose.model('Material', MaterialSchema);

module.exports = Material;
