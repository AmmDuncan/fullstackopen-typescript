import patientData from "../data/patients";
import { CleanPatient, Patient, Entry } from "../types";

export const getAll = () => {
  return patientData;
};

export const addOne = (details: Patient): CleanPatient => {
  patientData.push(details);
  const { id, name, dateOfBirth, gender, occupation } = details;

  return {
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  };
};

export const addEntry = (id: Patient['id'], entry: Entry) => {
  const patientIndex = patientData.findIndex((patient: Patient) => patient.id === id);
  const patient = patientData[patientIndex];
  patient.entries.push(entry);

  return patient;
};

