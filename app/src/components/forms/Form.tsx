import React from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";

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
  onSubmit: ((values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<any>),
  validationSchema: Object,
  children: React.ReactNode,
}

export default AppForm;
