import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AppIcons from "../../components/AppIcons";
import { colors } from "../../constants/theme";
import AppText from "../../components/AppText";

function FBAndGoogleButtons() {
  const handleGoogleLogin = () => {}

  return (
    <View style={styles.fBAndGoogleButtonContainer}>
      <TouchableOpacity style={styles.fbButton} onPress={handleGoogleLogin}>
        <AppIcons Icon='FontAwesome5' style={styles.likesIcon} name='facebook-f' size={24} color={colors.white}/>
        <AppText style={styles.fbButtonText}>
          CONTINUE WITH FACEBOOK
        </AppText>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <AppIcons Icon='AntDesign' style={styles.likesIcon} name='google' size={24} color={colors.primary}/>
        <AppText style={styles.googleButtonText}>
          CONTINUE WITH GOOGLE
        </AppText>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  fBAndGoogleButtonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2,
    paddingBottom: 20
  },
  fbButton: {
    flexDirection: 'row',
    backgroundColor: colors.blue,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 20
  },
  fbButtonText: {
    fontWeight: '700',
    textAlign: 'center',
    color: colors.white,
    flex: 1
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: colors.tertiary,
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