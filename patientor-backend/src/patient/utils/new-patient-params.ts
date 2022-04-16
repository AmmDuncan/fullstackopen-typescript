import { nanoid } from "nanoid";
import { Patient, Gender } from "../../types";

const isString = (str: unknown): str is string => {
  return typeof str === "string" || str instanceof String;
};

const isDate = (str: string): boolean => {
  return Boolean(Date.parse(str));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (str: any): str is Gender => {
  return Object.values(Gender).includes(str);
};

const parseName = (text: unknown): string => {
  if (!text || !isString(text)) {
    throw new Error("Missing or invalid name");
  }
  return text;
};

const parseSsn = (text: unknown): string => {
  if (!text || !isString(text)) {
    throw new Error("Missing or invalid name");
  }
  return text;
};

const parseDate = (text: unknown): string => {
  if (!text || !isString(text) || !isDate(text)) {
    throw new Error("Missing or invalid date");
  }
  return text;
};

const parseGender = (text: unknown): Gender => {
  if (!text || !isGender(text)) {
    throw new Error("Missing or invalid gender");
  }
  return text;
};

const parseOccupation = (text: unknown): string => {
  if (!text || !isString(text)) {
    throw new Error("Missing or invalid occupation");
  }
  return text;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const newPatientParams = (body: any): Patient => {
  return {
    id: nanoid(),
    name: parseName(body.name),
    dateOfBirth: parseDate(body.dateOfBirth),
    ssn: parseSsn(body.ssn),
    gender: parseGender(body.gender),
    occupation: parseOccupation(body.occupation),
    entries: []
  };
};

export default newPatientParams;
