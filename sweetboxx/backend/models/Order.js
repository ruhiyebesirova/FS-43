const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  senderEmail: { type: String, required: true },
  receiverEmail: { type: String, required: true },
  selectedBox: {
    id: Number,
    name: String,
    image: String
  },
  selectedSweets: [
    {
      id: Number,
      name: String,
      price: Number,
      weight: String
    }
  ],
  message: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);