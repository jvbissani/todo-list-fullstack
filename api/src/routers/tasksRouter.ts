import { Router } from 'express';
import tasksController from '../controllers/tasksController';
import TitleMiddleware from '../middlewares/validateFieldTitle';
import StatusMiddleware from '../middlewares/validateFieldStatus';

const router = Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', TitleMiddleware.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',
  TitleMiddleware.validateFieldTitle,
  StatusMiddleware.validateFieldStatus,
  tasksController.updateTask,
);

export default router;
