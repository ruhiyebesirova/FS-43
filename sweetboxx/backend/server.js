const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('SweetBox Backend Sistemi Bazasız Aktivdir! 🚀');
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`⚡ MÖHTƏŞƏM! Server ${PORT} portunda problemsiz alov saçır...`);
});