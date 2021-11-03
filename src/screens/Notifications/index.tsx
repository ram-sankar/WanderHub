import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import { sizes } from "../../constants/theme";

function Notifications() {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.noNotifications}>
        <AppText style={styles.noNotificationsText}>No New Notifications</AppText>
        <Image source={require("../../assets/images/noNotifications.png")} style={styles.image}/>
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  noNotifications: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 300,
    marginTop: 20
  },
  noNotificationsText: {
    fontSize: sizes.fontXL,
    fontWeight: '700'
  },
  image: {
    height: 200,
    width: 200
  },
});
export default Notifications;