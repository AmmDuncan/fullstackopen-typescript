import { Router } from "express";
import diagnosesRouter from "./diagnoses";
import patientRouter from "./patient";

const router = Router();

router.use("/diagnoses", diagnosesRouter);
router.use("/patients", patientRouter);

export default router;
