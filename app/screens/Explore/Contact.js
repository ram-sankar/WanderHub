import React from "react";
import { View, StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";

function Contact() {
  return (
    <AppScreen style={styles.container}>
      <View>
        <AppText>Contact</AppText>
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0
  }
});
export default Contact;