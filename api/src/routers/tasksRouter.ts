import { Router } from 'express';
import tasksController from '../controllers/tasksController';

const router = Router();

router.get('/tasks', tasksController.getAll);

export default router;
