import type { FormFieldBlock } from "@payloadcms/plugin-form-builder/types";

export const buildInitialFormState = (fields: FormFieldBlock[]) => {
  const fieldState = {};

  for (const field of fields) {
    if (field.blockType === "checkbox") {
      fieldState[field.name] = field.defaultValue;
    }
    if (field.blockType === "country") {
      fieldState[field.name] = "";
    }
    if (field.blockType === "email") {
      fieldState[field.name] = "";
    }
    if (field.blockType === "text") {
      fieldState[field.name] = "";
    }
    if (field.blockType === "select") {
      fieldState[field.name] = "";
    }
    if (field.blockType === "state") {
      fieldState[field.name] = "";
    }
  }

  return fieldState;
};
