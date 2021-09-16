import React from "react";
import { View, StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";

function Overview() {
  return (
    <AppScreen style={styles.container}>
      <View>
        <AppText>Overview</AppText>
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  }
});
export default Overview;