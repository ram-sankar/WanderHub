import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { colors, sizes } from "../../constants/theme";
import { Form, FormField, SubmitButton } from "../../components/forms";
import { NewCityEntity } from "../../constants/models/AddContent";

function NewCity() {

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
          <FormField
            autoCorrect={false}
            name="date"
            placeholder="Date of Visit"
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
  }
});

export default NewCity;