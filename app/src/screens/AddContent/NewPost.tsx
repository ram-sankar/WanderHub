import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { Form, FormField, SubmitButton } from "../../components/forms";
import { NewPostEntity } from "../../constants/models/AddContent";
import { colors, sizes } from "../../constants/theme";

function NewPost() {
  
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(4).label("Title"),
    place: Yup.string().required().label("Place"),
    date: Yup.string().label("Date"),
  });

  const handleSubmit = async (data: NewPostEntity) => {
    console.log(data);
  }

  const InputForm = () => (
    <Form 
        initialValues={{ title: "", date: "", place: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <View>
          <AppText style={styles.inputTitle}>Title</AppText>
          <FormField
            autoCorrect={false}
            name="title"
            placeholder="Write an overview or an attractive title"
            multiline={true}
            lines={2}
            style={{ textAlignVertical: 'top',}}
          />
        </View>
        <View>
          <AppText style={styles.inputTitle}>Place</AppText>
          <FormField
            autoCorrect={false}
            name="place"
            placeholder="City/Spot name you have visited"
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
        <SubmitButton title="Post It" />
      </Form>
  )

  return (
    <AppScreen style={styles.container}>
      <BackButton style={styles.backButton} />
      <View style={styles.headerContainer}>
        <AppText style={styles.headingText}>Tell us about your last trip</AppText>
      </View>
      <View style={styles.inputContainer}>
        <InputForm />
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 25,
    left: 10,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headingText: {
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: sizes.fontXXL,
  },
  inputContainer: {
    marginTop: 30,
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

export default NewPost;