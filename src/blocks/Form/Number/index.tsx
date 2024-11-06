import type { TextField } from "@payloadcms/plugin-form-builder/types";
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type React from "react";

import { ErrorMessage } from "../Error";
import { Width } from "../Width";

export const NumberInput: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        [x: string]: any;
      }>
    >;
    register: UseFormRegister<FieldValues>;
  }
> = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required: requiredFromProps,
  width,
}) => {
  return (
    <Width width={width}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        defaultValue={defaultValue}
        id={name}
        type="number"
        {...register(name, { required: requiredFromProps })}
      />
      {requiredFromProps && errors[name] && <ErrorMessage />}
    </Width>
  );
};
