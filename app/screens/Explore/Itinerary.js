import React from "react";
import { View, StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";

function Itinerary() {
  return (
    <AppScreen style={styles.container}>
      <View>
        <AppText>Itinerary</AppText>
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0
  }
});
export default Itinerary;