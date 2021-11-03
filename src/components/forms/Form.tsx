import React from "react";
import { Formik, FormikValues } from "formik";

function AppForm({ initialValues, onSubmit, validationSchema, children }: Props) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

interface Props {
  initialValues: FormikValues,
  onSubmit: any,
  validationSchema?: Object,
  children: React.ReactNode,
}

export default AppForm;
