import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { sizes } from "../../constants/theme";
import { Form, FormField, SubmitButton } from "../../components/forms";
import { NewCityEntity } from "../../constants/models/AddContent";
import AppDatePicker from "../../components/forms/AppDatePicker";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";

function NewCity() {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  const validationSchema = Yup.object().shape({
    city: Yup.string().required().label("City"),
    date: Yup.string().required().label("Date"),
  });
  
  const handleSubmit = async (data: NewCityEntity) => {
    console.log(data);
  }

  const InputForm = () => (
    <Form 
        initialValues={{ city: "", date: new Date().toLocaleDateString() }}
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
          <AppDatePicker
            name="date"
            placeholder="Select a Date"
          />
        </View>
        <SubmitButton title="Add City" />
      </Form>
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
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
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
    color: theme.primary,
    fontWeight: '700',
    fontSize: sizes.fontL,
    marginTop: 10
  },
  submitButton: {
    fontSize: sizes.fontL,
    fontWeight: '700',
    backgroundColor: theme.primary,
    padding: 10,
    width: 100,
    textAlign: 'center' ,
    borderRadius: 10,
    color: theme.bg,
    marginTop: 10,
  },
  selectDateContainer: {
    flexDirection: 'row',
    backgroundColor: theme.bg,
    borderRadius: 5,
    marginVertical: 10,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  selectDateText: {
    color: theme.gray2,
    flex: 1
  }
});

export default NewCity;