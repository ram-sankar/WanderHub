import React, {useState} from "react";
import { View, StyleSheet, Platform, Pressable } from "react-native";
import * as Yup from "yup";
import DateTimePicker from '@react-native-community/datetimepicker';

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { colors, sizes } from "../../constants/theme";
import { Form, FormField, SubmitButton } from "../../components/forms";
import { NewCityEntity } from "../../constants/models/AddContent";
import AppIcons from "../../components/AppIcons";

function NewCity() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const validationSchema = Yup.object().shape({
    city: Yup.string().required().label("City"),
    date: Yup.string().required().label("Date"),
  });
  
  const handleSubmit = async (data: NewCityEntity) => {
    console.log(data);
  }

  const InputForm = () => (
    <Form 
        initialValues={{ city: "", date: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <View>
          <AppText style={styles.inputTitle}>City Name</AppText>
          <FormField
            autoCorrect={false}
            name="city"
            placeholder="City"
          />
        </View>
        <View>
          <AppText style={styles.inputTitle}>Trip Date</AppText>
          <Pressable onPress={() => setShow(true)} style={styles.selectDateContainer}>
            <AppText style={styles.selectDateText}>Select a Date</AppText>
            <AppIcons Icon="AntDesign" name="calendar" size={22} color={colors.black}/>
          </Pressable>
          <FormField
            autoCorrect={false}
            name="date"
            placeholder="Date of Visit"
          />
        </View>
        <SubmitButton title="Add City" />
      </Form>
  )

  const DatePicker = () => (
    show ? 
      (<DateTimePicker
        value={date}
        onChange={onChange}
      />) : 
      (<></>)
  )

  return (
    <AppScreen style={styles.container}>
      <BackButton style={styles.backButton} />
      <View style={styles.headerContainer}>
        <AppText style={styles.headingText}>Add your last visited city to your profile</AppText>
      </View>
      <View style={styles.inputContainer}>
        <InputForm />
      </View>
      <DatePicker />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  backButton: {
    position: 'absolute',
    top: 40,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headingText: {
    alignItems: 'center',
    textAlign: 'center',
    width: 250,
    fontWeight: '700',
    fontSize: sizes.fontXXL,
  },
  inputContainer: {
    marginTop: 60,
    alignItems: 'center'
  },
  inputTitle: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: sizes.fontL,
    marginTop: 10
  },
  submitButton: {
    fontSize: sizes.fontL,
    fontWeight: '700',
    backgroundColor: colors.primary,
    padding: 10,
    width: 100,
    textAlign: 'center' ,
    borderRadius: 10,
    color: colors.white,
    marginTop: 10,
  },
  selectDateContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 5,
    marginVertical: 10,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  selectDateText: {
    color: colors.gray2,
    flex: 1
  }
});

export default NewCity;