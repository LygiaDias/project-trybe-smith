import { Request, NextFunction, Response } from 'express';

function nameValidation(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  const maxNumber = 2;
  
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  } 
  if (typeof name !== 'string') {
    return res.status(422).json({ error: 'Name must be a string' });
  }
  if (name.length <= maxNumber) {
    return res.status(422).json({ error: 'Name must be longer than 2 characters' });
  }
  return next();
}

function amountValidation(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;
  const maxNumber = 2;
  
  if (!amount) {
    return res.status(400).json({ error: 'Amount is required' });
  } 
  if (typeof amount !== 'string') {
    return res.status(422).json({ error: 'Amount must be a string' });
  }
  if (amount.length <= maxNumber) {
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
  }
  return next();
}

function usernameValidation(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  const minNumber = 2;
  
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  } 
  if (typeof username !== 'string') {
    return res.status(422).json({ error: 'Username must be a string' });
  }
  if (username.length <= minNumber) {
    return res.status(422).json({ error: 'Username must be longer than 2 characters' });
  }
  return next();
}

function classValidation(req: Request, res: Response, next: NextFunction) {
  const { classe } = req.body;
  const minNumber = 2;
  
  if (!classe) {
    return res.status(400).json({ error: 'Classe is required' });
  } 
  if (typeof classe !== 'string') {
    return res.status(422).json({ error: 'Classe must be a string' });
  }
  if (classe.length <= minNumber) {
    return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
  }
  return next();
}

function levelValidation(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;
  
  if (level === undefined) {
    return res.status(400).json({ error: 'Level is required' });
  } 
  if (level === 0) {
    return res.status(422).json({ error: 'Level must be greater than 0' });
  }
  if (typeof level !== 'number') {
    return res.status(422).json({ error: 'Level must be a number' });
  }
  return next();
}

function passwordValidation(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  const minNumber = 7;
  
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  } 
  if (typeof password !== 'string') {
    return res.status(422).json({ error: 'Password must be a string' });
  }
  if (password.length <= minNumber) {
    return res.status(422).json({ error: 'Password must be longer than 7 characters' });
  }
  return next();
}

export default { nameValidation, 
  amountValidation,
  usernameValidation,
  levelValidation,
  classValidation,
  passwordValidation,
};