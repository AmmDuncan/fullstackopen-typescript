import { Router } from "express";
import { getAllDiagnoses } from "../diagnoses";

const router = Router();

router.get("/", getAllDiagnoses);

export default router;
