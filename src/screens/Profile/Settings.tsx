import React, {useContext} from "react";
import { View, StyleSheet, FlatList, Switch } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { FixMeLater } from "../../constants/models/AddContent";
import { sizes } from "../../constants/theme";
import useAuth from './../../auth/useAuth';
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";

function Settings() {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const { logOut } = useAuth();

  const settingsList = [
    {
      name: 'Dark mode',
      isTogglePresent: true,
      defaultValue: true
    },
    {
      name: 'Notification',
      isTogglePresent: true,
      defaultValue: true
    },
    {name: 'About'},
    {name: 'Feedback'},
    {
      name: 'Logout', 
      onPress: logOut, 
    },
  ]

  const ListItems = ({item}: {item: FixMeLater}) => (
    <View style={styles.listContent}>
      <AppText style={styles.listItems} onPress={() => item?.onPress()}>
        {item.name}
      </AppText>
      {item.isTogglePresent && 
        <Switch 
          value={item.defaultValue} 
          thumbColor={theme.bg}
          trackColor={{
            true: theme.primary
          }}
          // onValueChange={item.handleChange}
        />}
    </View>
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

const useStyles = (theme: Themes) => StyleSheet.create({
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
    paddingVertical: 10,
    flex: 1,
  },
  listContent: {
    flexDirection: 'row',
  },
});
export default Settings;