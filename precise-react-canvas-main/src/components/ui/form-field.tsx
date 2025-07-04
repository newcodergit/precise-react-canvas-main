import * as React from "react";
import {
  Controller,
  type ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { FormFieldContext } from "./form-field-context";

const FormField = function <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: ControllerProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

export { FormField }; 