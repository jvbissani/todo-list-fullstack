import { Request, Response } from 'express';

const getAll = (req: Request, res: Response) => {
  return res.status(200).json({ message: 'controller working!' });
};

export default {
  getAll
};
