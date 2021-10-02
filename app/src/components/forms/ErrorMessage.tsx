import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../AppText";

function ErrorMessage({ error, visible }: Props) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});

interface Props {
  error: string | FormikErrors<any> | string[] | FormikErrors<any>[] | undefined,
  visible: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined
}

export default ErrorMessage;
