import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import { PlanDetailsEntity } from "../../constants/models/Explore";
import { colors, sizes } from "../../constants/theme";

const iconColor = colors.gray5;

function Contact({data}: {data: PlanDetailsEntity}) {
  
  const TopSection = () => (
    <View style={styles.topSection}>
      <Image source={data.ownerImage} style={styles.ownerImage}/>
      <View style={styles.iconBox}>
        <AppText style={styles.ownerName}>{data.ownerName}</AppText>
      </View>
    </View>
  )

  const ButtonTray = () => (
    <View style={styles.buttonTray}>
      <TouchableOpacity style={styles.button}>
        <AppText style={styles.buttonText}>Follow</AppText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AppText style={styles.buttonText}>Message</AppText>
      </TouchableOpacity>
    </View>
  )

  return (
    <AppScreen style={styles.container}>
      <TopSection/>
      <ButtonTray/>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10
  },
  ownerImage: {
    height: 70,
    width: 70,
    marginBottom: 5
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 10
  },
  iconsTray: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2,
    paddingBottom: 20
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconText: {
    fontSize: sizes.fontS,
    color: iconColor,
    paddingLeft: 5
  },
  ownerName: {
    fontWeight: '700',
    fontSize: sizes.fontXXL
  },
  buttonTray: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    width: '100%',
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: sizes.fontL
  }
});
export default Contact;