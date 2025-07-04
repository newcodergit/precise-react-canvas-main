import * as React from "react";
const FormFieldContext = React.createContext<{ name: string } | undefined>(undefined);
export { FormFieldContext }; 