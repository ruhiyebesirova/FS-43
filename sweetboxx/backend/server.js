const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes'); // 👈 Bura əlavə olundu

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// API Marşrutları
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes); // 👈 Bura əlavə olundu

app.get('/', (req, res) => {
  res.send('SweetBox Backend Sistemi Aktivdir! 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda alov saçır...`);
});