import Ajv from "ajv";

const ajv = new Ajv();

const emailValidationSchema = {
  type: "string",
  pattern: "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
};

export const validateEmail = ajv.compile(emailValidationSchema);
