import { FieldArrayRenderProps } from "formik";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { Form, FormField, SubmitButton } from "../../components/forms";
import AppFieldArray from "../../components/forms/AppFieldArray";
import { FixMeLater, NewPostEntity } from "../../constants/models/AddContent";
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

  const FormSectionList = ({arrayHelpers, index, friend}: FormSectionListEntity) => (
    <View>
        <FormField name={`friends.${index}`} value={friend}/>
        <AppText onPress={() => arrayHelpers.remove(index)}>
          remove
        </AppText>
        <AppText onPress={() => arrayHelpers.insert(index+1,`${index}`)}>
          add
        </AppText>
      </View>
  )

  const RenderFunction = (arrayHelpers: FieldArrayRenderProps, values: any) => (
    <View>
      {values.friends && values.friends.length > 0 ? (
        values.friends.map((friend: any, index: number) => (
          <FormSectionList key={index} index={index} arrayHelpers={arrayHelpers} friend={friend} />
        ))
      ) : (
        <AppText onPress={() => arrayHelpers.push('')}>
          Add Section
        </AppText>
      )}
    </View>
    )

  const InputForm = () => (
    <Form 
        initialValues={{ title: "", date: "", place: "", friends: ['ram1', 'ram2', 'ram3'] }}
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
        <AppFieldArray name="friends" RenderFunction={RenderFunction} />
        <SubmitButton title="Post It" />
      </Form>
  )

  return (
    <AppScreen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton style={styles.backButton} />
        <View style={styles.headerContainer}>
          <AppText style={styles.headingText}>Tell us about your last trip</AppText>
        </View>
        <View style={styles.inputContainer}>
          <InputForm />
        </View>
      </ScrollView>
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

interface FormSectionListEntity {
  arrayHelpers: FieldArrayRenderProps;
  index: number;
  friend: FixMeLater
}

export default NewPost;