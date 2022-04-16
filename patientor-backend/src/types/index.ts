export type Diagnose = {
  code: string;
  name: string;
  latin?: string;
};


interface BaseEntry {
  id: string;
  date: string;
  type: string;
  specialist: string;
  description: string;
  diagnosisCodes?: Array<Diagnose['code']>
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: 'OccupationalHealthcare';
  employerName: string;
  sickLeave?: {
    startDate: string,
    endDate: string
  };
}

interface HospitalEntry extends BaseEntry {
  type: 'Hospital';
  discharge: {
    date: string,
    criteria: string,
  }
}

enum HealthRating {
  Healthy = 0,
  LowRisk = 1,
  HighRisk = 2,
  CriticalRist = 3
}

interface HealthCheck extends BaseEntry{
  type: 'HealthCheck';
  healthCheckRating: HealthRating
}

export type Entry = HospitalEntry | OccupationalHealthcareEntry | HealthCheck

export type Patient = {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[];
};

export type CleanPatient = Omit<Patient, "ssn" | "entries">;

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}
