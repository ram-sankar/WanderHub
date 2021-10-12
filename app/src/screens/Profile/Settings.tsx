import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { FixMeLater } from "../../constants/models/AddContent";
import { sizes } from "../../constants/theme";

function Settings() {

  const settingsList = [
    {name: 'Dark mode'},
    {name: 'Notification'},
    {name: 'About'},
    {name: 'Feedback'},
    {name: 'Logout'},
  ]

  const ListItems = ({item}: {item: FixMeLater}) => (
    <AppText style={styles.listItems} onPress={()=>console.log(item)}>
      {item.name}
    </AppText>
  );

  const RenderList = () => (
    <FlatList
      data={settingsList}
      keyExtractor={(item, index) => index.toString()}
      renderItem={ListItems}
      showsVerticalScrollIndicator={false}
    />
  );

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topSection}>
        <BackButton style={styles.backButton}/>
        <AppText style={styles.pageHeading}>Settings</AppText>
      </View>
      <RenderList />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  backButton: {
    marginBottom: 0
  },
  topSection: {
    flexDirection: 'row',
    height: 40
  },
  pageHeading: {
    fontWeight: '700',
    fontSize: sizes.fontXXL,
  },
  listItems: {
    fontSize: sizes.fontL,
    paddingVertical: 10
  }
});
export default Settings;