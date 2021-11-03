import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { FieldArrayRenderProps } from "formik";
import * as Yup from "yup";

import AppPopupMenu from "../../components/AppPopupMenu";
import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { Form, FormField, SubmitButton } from "../../components/forms";
import AppFieldArray from "../../components/forms/AppFieldArray";
import { NewPostEntity } from "../../constants/models/AddContent";
import { colors, sizes } from "../../constants/theme";
import FormImagePicker from "../../components/forms/FormImagePicker";
import AppIcons from "../../components/AppIcons";

function NewPost() {
  
  const initialValues = { 
    title: "aaaa", 
    place: "aaaa", 
    image: '',
    sections: [
      {title: '', content: '', image: ''}
    ] 
  }
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(4).label("Title"),
    place: Yup.string().required().label("Place"),
    image: Yup.string().required().label("Image"),
  });

  const handleSubmit = async (data: NewPostEntity) => {
    console.log(data);
  }

  const menuActions = [
    {id: 1, text: 'Add Section'}, 
    {id: 2, text:'Delete'} 
  ]
  const onPopupEvent = (id: number, arrayHelpers: any, index: number) => {
    if (id === 1) {
      arrayHelpers.insert(index+1,`${index}`)
    } else if (id === 2) {
      arrayHelpers.remove(index)
    }
  }

  const AddImageButton = () =>(
    <View style={styles.addImageButton}>
      <AppIcons Icon="FontAwesome" name='plus' color={colors.gray4} size={16}/>
      <AppText style={styles.addImageText}>
        Image
      </AppText>
    </View>
  )

  const FormSectionList = ({arrayHelpers, index, sectionContent}: FormSectionListEntity) => (
    <View>
        <View style={styles.sectionTopFields}>
          <View style={styles.sectionTitleContainer}>
            <FormField
              name={`sections.${index}.title`} 
              value={sectionContent.title}
              placeholder="Title for Section"
              containerStyling={styles.sectionTitleInputContainer}
              style={styles.sectionTitle}
            />
          </View>
          <View style={styles.menuContainer}>
            <AppPopupMenu
             isIconVertical={false} 
             actions={menuActions} 
             onPress={(event: any) => onPopupEvent(event, arrayHelpers, index)} 
            />
          </View>
        </View>
        <FormImagePicker
          name={`sections.${index}.image`}
          imageStyle={styles.sectionImage}
          AddImageButton={AddImageButton}
        />
        <FormField
          name={`sections.${index}.content`} 
          value={sectionContent.content}
          placeholder="Describe your experience, mention some tips or notes for other travelers visiting this place "
          multiline={true}
          lines={3}
          />
      </View>
  )

  const RenderFunction = (arrayHelpers: FieldArrayRenderProps, values: any) => (
    <View>
      {values.sections && values.sections.length > 0 ? (
        values.sections.map((sectionContent: SectionContentEntity, index: number) => (
          <FormSectionList key={index} index={index} arrayHelpers={arrayHelpers} sectionContent={sectionContent} />
        ))
      ) : (
        <AppText onPress={() => arrayHelpers.push('')}>
          Add Section
        </AppText>
      )}
    </View>
  )

  const AddImageIcon = () => (
    <AppIcons Icon="MaterialIcons" name='add-a-photo' color={colors.gray4} size={24}/>
  )

  const InputForm = () => (
    <Form 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <View>
          <FormImagePicker
            name={'image'}
            imageStyle={styles.sectionImage}
            AddImageButton={AddImageIcon}
          />
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
        <AppFieldArray name="sections" RenderFunction={RenderFunction} />
        <SubmitButton title="Post It" />
      </Form>
  )

  return (
    <AppScreen>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton />
        <View style={styles.inputContainer}>
          <InputForm />
        </View>
      </ScrollView>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: sizes.padding,
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
    marginBottom: 90,
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
  sectionTitleContainer: {
    flex: 1,
    alignContent: 'center'
  },
  sectionTitleInputContainer: {
    backgroundColor: colors.transparent,
  },
  sectionTitle: {
    fontSize: sizes.fontXL,
  },
  sectionTopFields: {
    flexDirection: 'row'
  },
  menuContainer: {
    alignSelf: 'center'
  },
  imageContainer: {
    width: 100,
    height: 100
  },
  sectionImage: {
    width: '100%',
    height: 200,
  },
  addImageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  addImageText: {
    fontSize: sizes.fontL,
    marginLeft: 10,
    color: colors.gray4
  }
});

interface FormSectionListEntity {
  arrayHelpers: FieldArrayRenderProps;
  index: number;
  sectionContent: SectionContentEntity
}

interface SectionContentEntity {
  title: string,
  content: string,
  image?: any
}

export default NewPost;