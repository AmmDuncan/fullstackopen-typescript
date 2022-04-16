import validateSchema from './validate-schema';

const EntrySchema = {
  date: true,
  type: true,
  specialist: true,
  description: true,
};

const extra = {
  OccupationalHealthcare: {
    employerName: true,
    sickLeave: true,
  },
  Hospital: {
    discharge: true,
  },
  HealthCheck: {
    healthCheckRating: true,
  },
};

const validatePatientBody = validateSchema(EntrySchema, {extra, fieldName: 'type'});
export default validatePatientBody;
