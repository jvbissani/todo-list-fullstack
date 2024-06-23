import { Request, Response, NextFunction } from 'express';

const validateFieldStatus = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  if (body.status === undefined) {
    return res.status(400).json({ message: 'The field status is required.' });
  }

  if (body.status === '') {
    return res.status(400).json({ message: 'The status cannot be empty.' });
  }

  next();
};

export default {
  validateFieldStatus,
};
