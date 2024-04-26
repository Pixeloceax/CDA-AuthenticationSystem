import Ajv from "ajv";

const ajv = new Ajv();

const passwordValidationSchema = {
  type: "string",
  pattern:
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{13,}$",
};

export const validatePassword = ajv.compile(passwordValidationSchema);
