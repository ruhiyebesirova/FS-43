// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`🚀 MongoDB Atlas-a uğurla qoşuldu: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Bağlantı xətası: ${error.message}`);
    process.exit(1);
  }
};

// BU SƏTİR MÜTLƏQDİR! Funksiyanı kənara ötürən hissə budur:
module.exports = connectDB;