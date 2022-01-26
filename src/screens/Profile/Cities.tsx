import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import { City } from "../../constants/models/Profile";
import { sizes } from "../../constants/theme";
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";

function Cities({data}: {data: City[]}) {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  const RenderCityList = () => (
    <>
      {data.map((city: City) => (
        <View key={city.id} style={styles.cardContainer}>
          <AppText style={styles.cityName}>
            {city.name}, {city.state}
          </AppText>
          <AppText style={styles.date}>{city.date}</AppText>
        </View>
      ))}
    </>
  )

  return (
    <AppScreen style={styles.container}>
      <RenderCityList />
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    paddingTop: 0,
    width: '100%',
    marginVertical: 5,
    alignItems: 'center'
  },
  cardContainer: {
    width: '90%',
    backgroundColor: theme.bg,
    borderRadius: 5,
    elevation: 1,
    marginVertical: 10,
    paddingVertical: 25,
    paddingHorizontal: 20
  },
  cityName: {
    fontWeight: '700',
    fontSize: sizes.fontL
  },
  date: {
    fontSize: sizes.font
  }
});

export default Cities;