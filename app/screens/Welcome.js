import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { colors } from "../constants/theme";
import AppScreen from "../components/AppScreen";

function Welcome({navigation}) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.headingContainer}>
        <AppText style={styles.text}>Your home.</AppText>
        <AppText style={styles.textGreen}>Greener</AppText>
      </View>
      <AppText style={styles.secondaryText}>Enjoy the experience</AppText>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/images/illustration_1.png")}
      />
      <AppButton
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <AppButton
        title="Signup"
        onPress={() => navigation.navigate('Login')}
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
  textGreen: {
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