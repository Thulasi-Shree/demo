const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
  minDeliveryCharge: {
    type: Number,
    required: true,
    default: 0
  },
  deliveryChargePerKm: {
    type: Number,
    required: true,
    default: 0
  },
  taxAmount: {
    type: Number,
    required: true,
    default: 0,    
  },
  deliveryKm:{
    type: Number,
    // required: true,
    default: 0,    
  },
  restaurantId: {
    type: Number,
    required: true,
    unique: true
  },
  restaurantBranch:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('settings', SettingsSchema);
