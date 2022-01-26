import React, { useState, useContext } from "react";
import { View, StyleSheet, Pressable } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import { ItineraryEntity, PlacesEntity, PlanDetailsEntity } from "../../constants/models/Explore";
import { sizes } from "../../constants/theme";
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";

function Itinerary({data}: {data: PlanDetailsEntity}) {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const [activeDay, setActiveDay] = useState(1);

  const Bullet = ({places}: {places: PlacesEntity[]}) => (
    <>
      {places.map((place: PlacesEntity, index: number) => (
        <View key={index} style={styles.row}>
          <AppText>{'\u2022' + " "}</AppText>
          <AppText style={styles.bulletText}>{place.title}</AppText>
        </View>
      ))}
    </>
  )

  const RenderDays = () => (
    <>
      {data.itinerary.map((day: ItineraryEntity) => (
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
      ))}
    </>
  )
  return (
    <AppScreen style={styles.container}>
      <RenderDays />
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 0
  },
  dayContainer: {
    backgroundColor: theme.bg,
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