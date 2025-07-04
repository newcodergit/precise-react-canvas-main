import * as React from "react";
import {
  Controller,
  type ControllerProps,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { FormField } from "./form-field";
import { FormFieldContext } from "./form-field-context";

// --- FormItemContext Setup ---
export type FormItemContextValue = {
  id: string;
};

export const FormItemContext = React.createContext<FormItemContextValue | undefined>(undefined);

// --- useFormField Hook ---
export const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);

  if (!fieldContext) {
    throw new Error("useFormField must be used within a <FormField>.");
  }

  if (!itemContext) {
    throw new Error("useFormField must be used within a <FormItem>.");
  }

  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};
