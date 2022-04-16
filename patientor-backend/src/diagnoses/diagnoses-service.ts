import diagnosesData from "../data/diagnoses";
import { Diagnose } from "../types";

export const getAll = (): Diagnose[] => {
  return diagnosesData;
};
