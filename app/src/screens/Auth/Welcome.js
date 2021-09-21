import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import { colors } from "../../constants/theme";
import AppScreen from "../../components/AppScreen";
import routes from "../../navigator/routes";

function Welcome({navigation}) {
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
        onPress={() => navigation.navigate(routes.LOGIN)}
      />
      <AppButton
        title="SIGN UP"
        onPress={() => navigation.navigate(routes.REGISTER)}
        color="black"
        backgroundColor="white"
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
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
    color: colors.primary,
  },
  secondaryText: {
    color: colors.gray
  },
  image: {
    width: "100%",
    height: "65%",
    marginBottom: -50
  }
});

export default Welcome;