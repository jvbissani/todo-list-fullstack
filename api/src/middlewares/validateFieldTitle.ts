import { Request, Response, NextFunction } from 'express';

const validateFieldTitle = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: 'The field title is required.' });
  }

  if (body.title === '') {
    return res.status(400).json({ message: 'The title cannot be empty.' });
  }

  next();
};

export default {
  validateFieldTitle,
};
