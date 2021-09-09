import React, {useState} from "react";
import { StyleSheet, Switch, TouchableOpacity, View, ScrollView, Pressable, TextInput } from "react-native";

import AppModal from "../components/AppModal";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import Avatar from "../components/Avatar";
import BackButton from "../components/BackButton";
import { mocks } from "../constants";
import defaultStyles from "../constants/styles";
import { colors, sizes } from "../constants/theme";

function Profile({navigation}) {
  const [isNotificationOn, setIsNotificationOn] = useState(true)
  const [isNewsLetterEnabled, setIsNewsLetterEnabled] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [username, setUsername] = useState('Ram Sankar');
  const [location, setLocation] = useState('Chennai, India');
  const [input, setInput] = useState();

  const EditButton = () => {
    return(
    <TouchableOpacity onPress={()=>setIsModalVisible(true)}>
      <AppText style={styles.editButton}>Edit</AppText>
    </TouchableOpacity>
  )}

  const RenderEditableContent = ({title, content, shouldEnableEdit=true, onChange}) => {
    return(
      <View style={styles.editBlock}>
        <AppText style={styles.editTitle}>{title}</AppText>
        <View style={styles.editContainer}>
          <AppText style={styles.editHeading}>{content}</AppText>
          {shouldEnableEdit && <EditButton title={title} content={content} onChange={onChange}/>}
        </View>
      </View>
    )
  }

  const RenderRadioButton = ({title, defaultValue = false, onValueChange, style}) => (
    <View style={[styles.radioButtonContainer, style]}>
      <AppText style={styles.radioButtonTitle}>{title}</AppText>
      <Switch 
        value={defaultValue} 
        thumbColor={colors.white}
        trackColor={{
          true: colors.primary
        }}
        onValueChange={onValueChange}
      />
    </View>
  )

  const RenderModel = () => {
    return(
    <AppModal isModalVisible={isModalVisible} onRequestClose >
      <AppText style={styles.modalText}>Username</AppText>
      <TextInput
        onChangeText={text => setInput(text)}
        value={input}
      />
      <Pressable
        style={[styles.button]}
        onPress={() => setIsModalVisible(false)}
      >
        <AppText style={styles.textStyle}>Save</AppText>
      </Pressable>
    </AppModal>
  )}


  return (
    <AppScreen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topHeadingContainer}>
          <BackButton style={styles.backButton} navigation={navigation}/>
          <AppText style={[defaultStyles.headingText, styles.heading]}>Profile</AppText>
          <Avatar source={mocks.profile.avatar} navigation={navigation}/>
        </View>
        
        <RenderEditableContent title='Username' content={username} shouldEnableEdit={true} onChange={setUsername}/>
        <RenderEditableContent title='Location' content={location} shouldEnableEdit={true} onChange={setUsername}/>
        <RenderEditableContent title='E-mail' content='mailtoramsankar@gmail.com' shouldEnableEdit={false}/>
        
        <View style={styles.horizontalLine}></View>

        <AppText style={styles.section2Title}>Settings</AppText>
        <AppText style={[styles.section2Title, styles.mt2]}>Feedback</AppText>
        
        <View style={styles.horizontalLine}></View>

        <RenderRadioButton title="Notification" defaultValue={isNotificationOn} onValueChange={value=>setIsNotificationOn(value)} />
        <RenderRadioButton style={styles.mt2} title="News Letter" defaultValue={isNewsLetterEnabled} onValueChange={value=>setIsNewsLetterEnabled(value)} />

        <View style={styles.horizontalLine}></View>

        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <AppText>Logout</AppText>
        </TouchableOpacity>

        {isModalVisible && <RenderModel />}
        
      </ScrollView>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: sizes.padding
  },
  topHeadingContainer: {
    flexDirection: 'row'
  },
  heading: {
    flex: 1,
    marginLeft: 10
  },
  backButton: {
    marginTop: -5
  },
  editBlock: {
    marginVertical: 10
  },
  editContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  editTitle: {
    color: colors.gray,
    fontSize: 17,
    fontWeight: '700'
  },
  editHeading: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600'
  },
  editButton: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '700'
  },
  horizontalLine: {
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
    marginVertical: 30
  },
  section2Title: {
    color: colors.black,
    fontSize: 17,
    fontWeight: '600',
  },
  mt2: {
    marginTop: 20
  },
  radioButtonContainer: {
    flexDirection: 'row',
  },
  radioButtonTitle: {
    flex: 1
  },
  button: {
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: colors.primary,
    elevation: 2
  },
  textStyle: {
    color: "white",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Profile;