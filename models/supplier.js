const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  materialsSupplied: {
    type: [String], // Array of material names
    required: true
  }
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;