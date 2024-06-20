import { Request, Response } from 'express';
import tasksModel from '../models/tasksModel';

const getAll = async (req: Request, res: Response) => {

  const tasks = await tasksModel.getAll();

  return res.status(200).json(tasks);
};

export default {
  getAll
};
