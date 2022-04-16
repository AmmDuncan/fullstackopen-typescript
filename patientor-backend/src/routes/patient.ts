import { Router } from "express";
import { addPatient, getAllPatients, getSinglePatient, addEntryForPatient } from "../patient";
import validatePatientBody from "../patient/validate-patient-body";
import validateEntryBody from "../patient/validate-entry-body";

const router = Router();

router.get("/", getAllPatients);
router.post("/", validatePatientBody, addPatient);

router.get("/:id", getSinglePatient);
router.post("/:id/entries", validateEntryBody, addEntryForPatient);

export default router;
