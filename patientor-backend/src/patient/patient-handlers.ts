import {Request, Response} from "express";
import {nanoid} from 'nanoid';

import {CleanPatient, Entry, Patient} from "../types";
import {addOne, getAll, addEntry} from "./patient-service";

import newPatientParams from "./utils/new-patient-params";

export const getAllPatients = (_req: Request, res: Response) => {
  const patients = getAll();
  const publicPatients: CleanPatient[] = patients.map(
    ({ssn: _s, entries: _e, ...rest}: Patient) => rest
  );
  res.json(publicPatients);
};

export const addPatient = (req: Request, res: Response) => {
  try {
    const newPatient = newPatientParams(req.body);
    const savedPatient = addOne(newPatient);
    return res.json(savedPatient);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return res.status(400).json({error: e.message});
  }
};

export const getSinglePatient = (req: Request, res: Response) => {
  const id: string | undefined = req.params.id;

  if (!id) return res.status(400).json({error: "Missing or invalid id"});
  const patients = getAll();
  res.json(patients.filter((patient) => patient.id === id));
};

export const addEntryForPatient = (req: Request, res: Response) => {
  const id: string | undefined = req.params.id;
  // validate id
  if (!id) return res.status(400).json({error: "Missing or invalid id"});
  const patients = getAll();
  const patient = patients.filter((patient) => patient.id === id)[0];

  // if user not found
  if (!patient) return res.status(404).json({error: 'Patient not found'});
  const entryId = nanoid();
  const entry = {...req.body, id: entryId} as Entry;

  const updatedPatient = addEntry(id, entry);

  return res.status(201).json(updatedPatient);
};
