import React from "react";
import { FieldArray, useFormikContext } from "formik";

function AppFieldArray({ name, RenderFunction, ...otherProps }: Props) {
  const { values } = useFormikContext<any>();

  return (
    <>
      <FieldArray
      name={name}
      render={(arrayHelpers) => RenderFunction(arrayHelpers, values)}
        {...otherProps}
      />
    </>
  );
}

interface Props {
  name: string,
  [otherProps:string]: any,
}

export default AppFieldArray;
