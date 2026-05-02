import express from 'express';
import{
    getFlowers,
    getFlowerById,
    createFlower,
    updateFlower,
    deleteFlower
} from '../controllers/flowerController.js';

const router = express.Router();

router.get('/', getFlowers);
router.get('/:id', getFlowerById);
router.post('/', createFlower);
router.put('/:id', updateFlower);
router.delete('/:id', deleteFlower);

export default router;