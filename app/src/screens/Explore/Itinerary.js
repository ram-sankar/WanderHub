import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import { colors, sizes } from "../../constants/theme";

function Itinerary({data}) {
  const [activeDay, setActiveDay] = useState(1);

  const Bullet = ({places}) => (
    places.map((place, index) => (
      <View key={index} style={styles.row}>
        <AppText>{'\u2022' + " "}</AppText>
        <AppText style={styles.bulletText}>{place.title}</AppText>
      </View>
    ))
  )

  const RenderDays = () => (
    data.itinerary.map(day => (
      <View style={styles.dayContainer} key={day.day}>
        <Pressable onPress={() => setActiveDay(day.day)}>
          <AppText style={styles.dayHeader}>Day {day.day}: {day.heading}</AppText>
        </Pressable>
        {activeDay===day.day && (
          <View style={styles.bulletContainer}>
            <Bullet places={day.places}/>
          </View>
        )}
      </View>
    ))
  )
  return (
    <AppScreen style={styles.container}>
      <RenderDays />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 0
  },
  dayContainer: {
    backgroundColor: colors.white,
    elevation: 3,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5
  },
  dayHeader: {
    fontWeight: '700',
    fontSize: sizes.fontL
  },
  dayContent: {
    fontSize: sizes.fontL
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 3
  },
  bullet: {
    width: 10
  },
  bulletText: {
    flex: 1
  },
  bulletContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: 5
  }
});
export default Itinerary;