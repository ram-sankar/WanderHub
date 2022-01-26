import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({title, style, ...otherProps }: Props) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} style={style} {...otherProps} onPress={handleSubmit} />;
}

interface Props {
  [otherProps:string]: any,
  style?: Object
}

export default SubmitButton;
