import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, style }: Props) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} style={style} onPress={handleSubmit} />;
}

interface Props {
  title: string,
  style?: Object
}

export default SubmitButton;
