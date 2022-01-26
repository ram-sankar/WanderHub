import React, { useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NavigationContext } from '@react-navigation/native';

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import { sizes } from "../../constants/theme";
import routes from "../../navigator/routes";
import ThemeContext from "../../common/ThemeContext";
import { Themes } from "../../constants/models/Common";

function AddContent() {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const navigation = React.useContext(NavigationContext);

  const onNewCityClick = () => {
    navigation?.navigate(routes.NEW_CITY);
  }

  const onNewPostClick = () => {
    navigation?.navigate(routes.NEW_POST);
  }

  return (
    <AppScreen style={styles.container}>
    <View style={styles.contentContainer}>
      <Image source={require("../../assets/images/newPost.png")} style={styles.image}/>
      <AppText style={styles.buttonText}>Tell us about your last trip</AppText>
      <TouchableOpacity onPress={onNewPostClick}>
        <AppText style={styles.button}>New Post</AppText>
      </TouchableOpacity>
    </View>
        <View style={styles.contentContainer}>
          <Image source={require("../../assets/images/newCity.png")} style={styles.image}/>
          <AppText style={styles.buttonText}>Add your last visited city to your profile</AppText>
          <TouchableOpacity onPress={onNewCityClick}>
              <AppText style={styles.button}>Add City</AppText>
          </TouchableOpacity>
        </View>
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingBottom: 30,
    alignItems: 'center'
  },
  image: {
    height: 200,
    width: 200
  },
  button: {
    fontSize: sizes.fontL,
    fontWeight: '700',
    backgroundColor: theme.primary,
    padding: 10,
    width: 100,
    textAlign: 'center' ,
    borderRadius: 10,
    color: theme.bg,
    marginTop: 10
  },
  buttonText: {
    marginTop: 10,
    fontWeight: '700',
    fontSize: sizes.fontL,
    width: 200,
    textAlign: 'center',
  }
});
export default AddContent;