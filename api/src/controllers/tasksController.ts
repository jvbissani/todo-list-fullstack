import { Request, Response } from 'express';
import tasksModel from '../models/tasksModel';

const getAll = async (_req: Request, res: Response) => {

  const tasks = await tasksModel.getAll();

  return res.status(200).json(tasks);
};

const createTask = async (req: Request, res: Response)=> {
  const createdTask = await tasksModel.createTask(req.body);
  return res.status(201).json(createdTask);
}

const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  await tasksModel.deleteTask(id);
  return res.status(204).json();
};

export default {
  getAll,
  createTask,
  deleteTask,
};
