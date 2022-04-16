import { Request, Response } from "express";

import { getAll } from "./diagnoses-service";

export const getAllDiagnoses = (_req: Request, res: Response) => {
  return res.json(getAll());
};
