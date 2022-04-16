import {NextFunction, Request, Response} from 'express';

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

interface ExtraSchema {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const validateSchema = (
  schema: object,
  options: { extra: ExtraSchema, fieldName: string } = {
    extra: {},
    fieldName: '',
  },
) => (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    if (options.extra && options.fieldName) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const entryType = req.body[options.fieldName];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      schema = {...schema, ...options.extra[entryType]};
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const presentKeys: string[] = Object.keys(req.body);
    Object.keys(schema).forEach((key) => {
      if (!presentKeys.includes(key)) {
        throw new ValidationError(`"${key}" is required`);
      }
    });
    next();
  } catch (error) {
    next(error);
  }
};

export default validateSchema;
