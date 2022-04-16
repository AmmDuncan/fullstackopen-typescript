import express from "express";

export const validateBMIQuery = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { height, weight } = req.query;
    if (!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
      return res.status(400).json({
        error: "Malformatted parameters",
      });
    }
    return next();
  } catch (e) {
    return res.status(400).json({
      error: e.message,
    });
  }
};

export const validateExercisesBody = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { daily_exercises, target } = req.body;

    if (!daily_exercises || !target) {
      return res.status(400).json({
        error: "Parameters missing",
      });
    }
    const exercisesAreNumberes =
      daily_exercises &&
      daily_exercises.length &&
      daily_exercises.every((time: string | number) => !isNaN(Number(time)));
    if (!exercisesAreNumberes || isNaN(Number(target))) {
      return res.status(400).json({
        error: "Malformed parameters",
      });
    }
    return next();
  } catch (e) {
    return res.status(400).json({
      error: e.message,
    });
  }
};

export const logger = (
  req: express.Request,
  _res: express.Response,
  next: express.NextFunction
) => {
  console.log("---");
  console.log("Method:", req.method);
  console.log("Path:", req.path);
  console.log("Body", req.body);
  next();
};
