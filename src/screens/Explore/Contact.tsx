import React, { useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity, ColorValue } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import { PlanDetailsEntity } from "../../constants/models/Explore";
import { sizes } from "../../constants/theme";
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";

let iconColor: ColorValue;

function Contact({data}: {data: PlanDetailsEntity}) {
  const { theme } = useContext(ThemeContext);
  iconColor = theme.gray5;
  const styles = useStyles(theme);
  
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

const useStyles = (theme: Themes) => StyleSheet.create({
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
    borderBottomColor: theme.gray2,
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
    borderBottomColor: theme.gray2,
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  button: {
    backgroundColor: theme.primary,
    paddingVertical: 10,
    width: '100%',
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: theme.bg,
    fontWeight: '700',
    fontSize: sizes.fontL
  }
});
export default Contact;