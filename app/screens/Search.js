import React from "react";
import { View, StyleSheet } from "react-native";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";

function Search() {
  return (
    <AppScreen style={styles.container}>
      <View>
        <AppText>Search</AppText>
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});
export default Search;