import React, {useContext} from "react";
import { View, StyleSheet, ScrollView, Switch } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { sizes } from "../../constants/theme";
import useAuth from './../../auth/useAuth';
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";
import { colors as DefaultColor} from '../../constants/theme';

function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const { logOut } = useAuth();

  const onThemeToggle = () => {
    setTheme?.(theme.isDark ? DefaultColor.light : DefaultColor.dark);
  }

  const RenderItems = () => (
    <>
      <View style={styles.listContent}>
        <AppText style={styles.listItems}>
          Dark mode
        </AppText>
        <Switch 
          value={theme.isDark} 
          thumbColor={theme.bg}
          trackColor={{
            true: theme.primary
          }}
          onValueChange={onThemeToggle}
        />
      </View>

      <View style={styles.listContent}>
        <AppText style={styles.listItems}>
          Notification
        </AppText>
        <Switch 
          value={true} 
          thumbColor={theme.bg}
          trackColor={{
            true: theme.primary
          }}
        />
      </View>

      <View style={styles.listContent}>
        <AppText style={styles.listItems}>
          About
        </AppText>
      </View>

      <View style={styles.listContent}>
        <AppText style={styles.listItems}>
          Feedback
        </AppText>
      </View>

      <View style={styles.listContent}>
        <AppText style={styles.listItems} onPress={logOut}>
          Logout
        </AppText>
      </View>
    </>
  );

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topSection}>
        <BackButton style={styles.backButton}/>
        <AppText style={styles.pageHeading}>Settings</AppText>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderItems />
      </ScrollView>
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