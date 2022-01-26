import React, {useState, useContext} from "react";
import { StyleSheet, Pressable, Platform } from "react-native";
import { useFormikContext } from "formik";
import RNDateTimePicker from "@react-native-community/datetimepicker";

import ErrorMessage from "./ErrorMessage";
import AppText from "../AppText";
import AppIcons from "../AppIcons";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";

function AppDatePicker({ name, width, ...otherProps }: Props) {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const { values, setFieldValue, errors, touched } = useFormikContext<any>();
  const [date, setDate] = useState(new Date(values[name]));
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || new Date();
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setFieldValue(name, currentDate);
  };
  
  return (
    <>
      {show &&
      <RNDateTimePicker
        value={date}
        onChange={onChange}
        mode='date'
        {...otherProps}
      />}
      <Pressable onPress={() => setShow(true)} style={styles.selectDateContainer}>
        <AppText style={styles.selectDateText}>{date.toLocaleDateString()}</AppText>
        <AppIcons Icon="AntDesign" name="calendar" size={22} color={theme.text}/>
      </Pressable>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const useStyles = (theme: Themes) => StyleSheet.create({
  selectDateContainer: {
    flexDirection: 'row',
    backgroundColor: theme.bg,
    borderRadius: 5,
    marginVertical: 10,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%'
  },
  selectDateText: {
    color: theme.text,
    flex: 1
  }
});

interface Props {
  name: string,
  width?: string,
  [otherProps:string]: any,
}

export default AppDatePicker;
