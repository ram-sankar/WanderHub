import React from "react";
import { View, StyleSheet } from "react-native";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";

function PlanDetails({ route }) {
  const { id } = route.params;
  
  return (
    <AppScreen style={styles.container}>
      <View>
        <BackButton />
        <AppText>PlanDetails</AppText>
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});
export default PlanDetails;