import React from "react";
import { View, StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import { colors, sizes } from "../../constants/theme";

function Cities({data}: FixMeLater) {

  const RenderCityList = () => (
    <>
      {data.map((city: FixMeLater) => (
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    width: '100%',
    marginVertical: 5,
    alignItems: 'center'
  },
  cardContainer: {
    width: '90%',
    backgroundColor: colors.white,
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
export type FixMeLater = any;
export default Cities;