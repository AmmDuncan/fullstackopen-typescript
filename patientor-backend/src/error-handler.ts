import {Response, Request, NextFunction} from "express";

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction) => {
  if (error.name === 'ValidationError') {
    return res.status(400).json({
      error: String(error.message)
    });
  }

  return res.status(500).json({
    error: 'Sever error'
  });
};

export default errorHandler;
