import { ValidationError } from "express-validator";

declare module "express-validator" {
  export interface ValidationError {
    path: string;
    msg: string;
  }
}

const errorFormatter = (errors: ValidationError[]) => {
  const out: { [key: string]: { msg: string } } = {};
  errors.forEach((e) => {
    out[e.path] = {
      msg: e.msg,
    };
  });
  return out;
};

export default errorFormatter;
