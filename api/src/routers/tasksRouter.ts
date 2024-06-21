import { Router } from 'express';
import tasksController from '../controllers/tasksController';
import tasksMiddleware from '../middlewares/tasksMiddleware';

const router = Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateBody, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);

export default router;
