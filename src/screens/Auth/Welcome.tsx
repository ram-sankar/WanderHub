import React, { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";

import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import AppScreen from "../../components/AppScreen";
import routes from "../../navigator/routes";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";

function Welcome({navigation}: any) {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  return (
    <AppScreen style={styles.container}>
      <View style={styles.headingContainer}>
        <AppText style={styles.text}>We got your plan</AppText>
        <AppText style={styles.textPrimary}> ready!</AppText>
      </View>
      <AppText style={styles.secondaryText}>Sit tight and chill</AppText>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/images/women_resting.png")}
      />
      <AppButton
        title="LOG IN"
        color='text'
        onPress={() => navigation.navigate(routes.LOGIN)}
      />
      <AppButton
        title="SIGN UP"
        onPress={() => navigation.navigate(routes.REGISTER)}
        color='text'
        backgroundColor="bg"
      />
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  headingContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    marginTop: '10%',
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textPrimary: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.primary,
  },
  secondaryText: {
    color: theme.gray
  },
  image: {
    width: "100%",
    height: "65%",
    marginBottom: -50
  }
});

export default Welcome;