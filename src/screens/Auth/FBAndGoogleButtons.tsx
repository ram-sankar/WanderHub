import React, {useContext} from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AppIcons from "../../components/AppIcons";
import AppText from "../../components/AppText";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";

function FBAndGoogleButtons() {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const handleGoogleLogin = () => {}

  return (
    <View style={styles.fBAndGoogleButtonContainer}>
      <TouchableOpacity style={styles.fbButton} onPress={handleGoogleLogin}>
        <AppIcons Icon='FontAwesome5' name='facebook-f' size={24} color={theme.bg}/>
        <AppText style={styles.fbButtonText}>
          CONTINUE WITH FACEBOOK
        </AppText>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <AppIcons Icon='AntDesign' name='google' size={24} color={theme.primary}/>
        <AppText style={styles.googleButtonText}>
          CONTINUE WITH GOOGLE
        </AppText>
      </TouchableOpacity>
    </View>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  fBAndGoogleButtonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.gray2,
    paddingBottom: 20
  },
  fbButton: {
    flexDirection: 'row',
    backgroundColor: theme.blue,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 20
  },
  fbButtonText: {
    fontWeight: '700',
    textAlign: 'center',
    color: theme.bg,
    flex: 1
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: theme.tertiary,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 20
  },
  googleButtonText: {
    fontWeight: '700',
    textAlign: 'center',
    flex: 1
  },
});
export default FBAndGoogleButtons;