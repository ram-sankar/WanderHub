import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";

function NewCity() {
  return (
    <AppScreen style={styles.container}>
      <BackButton style={styles.backButton} />
      <View>
        <AppText>NewCity</AppText>
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  backButton: {
    // marginTop: Constants.statusBarHeight,
    position: 'absolute',
    top: 10,
    left: 30
  },
});
export default NewCity;