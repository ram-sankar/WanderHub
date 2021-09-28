import React from "react";
import { View, StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";

function Posts() {
  return (
    <AppScreen style={styles.container}>
      <View>
        <AppText>Posts</AppText>
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});
export default Posts;