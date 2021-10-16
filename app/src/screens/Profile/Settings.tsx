import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { FixMeLater } from "../../constants/models/AddContent";
import { sizes } from "../../constants/theme";
import useAuth from './../../auth/useAuth';

function Settings() {
  const { logOut } = useAuth();

  const settingsList = [
    {name: 'Dark mode'},
    {name: 'Notification'},
    {name: 'About'},
    {name: 'Feedback'},
    {name: 'Logouts', onPress: logOut},
  ]

  const ListItems = ({item}: {item: FixMeLater}) => (
    <AppText style={styles.listItems} onPress={() => item?.onPress()}>
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
    padding: sizes.padding,
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