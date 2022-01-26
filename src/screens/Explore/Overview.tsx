import React, { useContext } from "react";
import { View, StyleSheet, ScrollView, ColorValue } from "react-native";
import { Ionicons, FontAwesome5, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import AppIcons from "../../components/AppIcons";
import { sizes } from "../../constants/theme";
import { numberWithCommas } from "../../common/helperFunctions";
import { InclusionEntity, PlanDetailsEntity } from "../../constants/models/Explore";
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";

let iconColor: ColorValue;
const iconSize = 22;

function Overview({data}: {data: PlanDetailsEntity}) {
  const { theme } = useContext(ThemeContext);
  iconColor = theme.gray5;
  const styles = useStyles(theme);

  const TopSection = () => (
    <View style={styles.topSection}>
      <View style={styles.titleContainer}>
        <AppText style={styles.days}>{data.day} Day & {data.night} Night</AppText>
      </View>
      <AppText style={styles.cost}>&#8377;{numberWithCommas(data.cost)}</AppText>
    </View>
  );

  const IconTray = () => (
    <View style={styles.iconsTray}>
        <View style={styles.iconBox}>
          <Feather name="bookmark" size={iconSize} color={iconColor}/>
          <AppText style={styles.iconText}>Bookmark</AppText>
        </View>
        <View style={styles.iconBox}>
          <Ionicons name="heart-outline" size={iconSize} color={iconColor}/>
          <AppText style={styles.iconText}>{data.likes} Likes</AppText>
        </View>
        <View style={styles.iconBox}>
          <FontAwesome5 name="eye" size={iconSize} color={iconColor}/>
          <AppText style={styles.iconText}>{data.views} Views</AppText>
        </View>
        <View style={styles.iconBox}>
          <MaterialCommunityIcons name="share" size={iconSize} color={iconColor} />
          <AppText style={styles.iconText}>Share</AppText>
        </View>
      </View>
  );

  const IncludedItem = () => (
    <>
      {data.inclusion.map((item: InclusionEntity, index: number) => (
        <View style={styles.includedIconBox} key={index}>
          <AppIcons Icon={item.iconType} name={item.iconName} size={iconSize} color={iconColor}/>
          <AppText style={styles.iconText}>{item.name}</AppText>
        </View>
      ))}
    </>
  )

  return (
    <AppScreen style={styles.container}>
      <AppText style={styles.title}>{data.title}</AppText>
      <TopSection />
      <IconTray />
      <AppText style={styles.subHeading}>Included</AppText>
      <View style={[styles.iconsTray]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <IncludedItem />
        </ScrollView>
      </View>
      <AppText style={[styles.subHeading, styles.aboutHeading]}>About</AppText>
      <AppText style={styles.aboutText}>{data.about}</AppText>
      
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: sizes.fontXL,
    paddingTop: 10
  },
  iconsTray: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: theme.gray2,
    paddingBottom: 20
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconText: {
    fontSize: sizes.fontS,
    color: iconColor,
    paddingLeft: 5
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  titleContainer: {
    flex: 1
  },
  days: {
    color: theme.gray3,
    fontSize: sizes.font
  },
  cost: {
    fontWeight: '700',
    marginRight: 10,
    color: theme.red,
    fontSize: sizes.fontL
  },
  subHeading: {
    fontWeight: '700',
    fontSize: sizes.fontL,
    paddingTop: 20,
    paddingBottom: 15
  },
  includedIconBox: {
    justifyContent: 'center',
    alignItems:'center',
    minWidth: 60,
    paddingHorizontal: 10
  },
  aboutHeading: {
    paddingBottom: 5
  },
  aboutText: {
    fontSize: sizes.font,
    textAlign: 'justify'
  }
});
export default Overview;