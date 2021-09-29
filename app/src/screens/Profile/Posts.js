import React from "react";
import { View, StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import AppPopupMenu from "../../components/AppPopupMenu";

function Posts() {

  const onPopupEvent = (eventName) => {
    console.log(eventName);
  }

  return (
    <AppScreen style={styles.container}>
      <View>
        <AppPopupMenu actions={['Edit', 'Remove']} onPress={onPopupEvent} />
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    width: '100%',
    marginVertical: 5,
    alignItems: 'center'
  }
});
export default Posts;