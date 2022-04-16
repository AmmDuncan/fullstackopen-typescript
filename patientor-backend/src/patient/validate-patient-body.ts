import validateSchema from './validate-schema';

const patientSchema = {
  name: true,
  dateOfBirth: true,
  ssn: true,
  gender: true,
  occupation: true,
};

const validatePatientBody = validateSchema(patientSchema);

export default validatePatientBody;
