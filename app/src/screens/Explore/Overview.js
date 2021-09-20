import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Ionicons, FontAwesome5, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import AppIcons from "../../components/AppIcons";
import { colors, sizes } from "../../constants/theme";
import { numberWithCommas } from "../../common/helperFunctions";

const iconColor = colors.gray5;
const iconSize = 22;

function Overview({data}) {

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
          <Feather style={styles.likesIcon} name="bookmark" size={iconSize} color={iconColor}/>
          <AppText style={styles.iconText}>Bookmark</AppText>
        </View>
        <View style={styles.iconBox}>
          <Ionicons style={styles.likesIcon} name="heart-outline" size={iconSize} color={iconColor}/>
          <AppText style={styles.iconText}>{data.likes} Likes</AppText>
        </View>
        <View style={styles.iconBox}>
          <FontAwesome5 style={styles.likesIcon} name="eye" size={iconSize} color={iconColor}/>
          <AppText style={styles.iconText}>{data.views} Views</AppText>
        </View>
        <View style={styles.iconBox}>
          <MaterialCommunityIcons style={styles.likesIcon} name="share" size={iconSize} color={iconColor} />
          <AppText style={styles.iconText}>Share</AppText>
        </View>
      </View>
  );

  const IncludedItem = () => (
    data.inclusion.map((item, index) => (
      <View style={styles.includedIconBox} key={index}>
        <AppIcons Icon={item.iconType} style={styles.likesIcon} name={item.iconName} size={iconSize} color={iconColor}/>
        <AppText style={styles.iconText}>{item.name}</AppText>
      </View>
  )))

  return (
    <AppScreen style={styles.container}>
      <AppText style={styles.title}>{data.title}</AppText>
      <TopSection />
      <IconTray />
      <AppText style={styles.subHeading}>Included</AppText>
      <View style={[styles.iconsTray, styles.includedItemTray]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <IncludedItem />
        </ScrollView>
      </View>
      <AppText style={[styles.subHeading, styles.aboutHeading]}>About</AppText>
      <AppText style={styles.aboutText}>{data.about}</AppText>
      
    </AppScreen>
  )
}

const styles = StyleSheet.create({
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
    borderBottomColor: colors.gray2,
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
    color: colors.gray3,
    fontSize: sizes.font
  },
  cost: {
    fontWeight: '700',
    marginRight: 10,
    color: colors.red,
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