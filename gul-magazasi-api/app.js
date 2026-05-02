import express from 'express';
import flowerRoutes from './routes/flowerRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/flowers', flowerRoutes);

app.listen(8080, () => {
  console.log(`Server 8080 portunda isleyir`);
});
