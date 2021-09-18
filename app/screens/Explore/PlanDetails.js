import React, { useState } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import Constants from "expo-constants";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { colors, sizes } from "../../constants/theme";
import Overview from "./Overview";
import Itinerary from "./Itinerary";
import Contact from "./Contact";

function PlanDetails({ route }) {
  const { id } = route.params;
  const mockData = {
    id: 1, title: 'Kudremuka', cost: 450200, day: 3, night: 2, image: require("../../assets/images/hillWithFalls.jpg"), views: 340, likes: 27, ownerImage: require("../../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey',
    about: `Kudremukha is a mountain range and name of a peak located in Chikkamagaluru district, in Karnataka, India. It is also the name of a small hill station cum mining town situated near the mountain, about 20 kilometres from Kalasa.`,
    inclusion: [
      {name: 'travel', iconType: 'Ionicons', iconName: 'bus'}, 
      {name: 'food', iconType: 'Ionicons', iconName: 'fast-food-outline'}, 
      {name: 'hotel', iconType: 'MaterialIcons', iconName: 'hotel'}, 
      {name: 'Entry Fee', iconType: 'FontAwesome', iconName: 'money'},
      {name: 'Equipments', iconType: 'MaterialCommunityIcons', iconName: 'hiking'},
    ],
    itinerary: [
      {day: 1, heading: 'Depart from Bangalore', places: [
        {title: 'Depart from Bangalore by 5:00 AM'},
        {title: 'Refresh yourselves at Elniru falls on the way'},
        {title: 'Check in at the homestay, have dinner and hit the bed early'},
      ]},
      {day: 2, heading: 'Kudremukh Trek', places: [
        {title: 'Jeep Ride to the Kudremukh Trek Base'},
        {title: 'Start the trek to Kudremukh by 6:00 am'},
        {title: 'Reach the peak and Descend by 5:00 pm'},
      ]},
      {day: 3, heading: 'Depart from Bangalore', places: [
        {title: 'Refresh yourselves at Hebba falls on the way'},
        {title: 'Reach Bangalore by 5:00 am'},
      ]}
    ]
  };
  const userPreference = { isLiked: false, isBookMarked: false}
  
  const dataToComponent = {...mockData, ...userPreference};
  const tabHeaders = ['Overview', 'Itinerary', 'Contact'];
  const tabComponents = [<Overview data={dataToComponent} />, <Itinerary data={dataToComponent} />, <Contact data={dataToComponent} />];
  
  const [activeTab, setActiveTab] = useState(tabHeaders[0]);
  const [renderContent, setRenderContent] = useState(tabComponents[0])

  const handleTabChange = (tab, index) => {
    setActiveTab(tab);
    setRenderContent(tabComponents[index])
  }
  const RenderTabs = () => (
    tabHeaders.map((tab, index) => (
    <Pressable style={[styles.tabHeaderContainer, activeTab===tab && styles.activeTab]} onPress={() => handleTabChange(tab, index)} key={index}>
        <AppText style={[styles.tabHeaderText, activeTab===tab && styles.activeText]}>{tab}</AppText>
    </Pressable>
  )))
  return (
    <AppScreen style={styles.container}>
      <Image style={styles.topImage} source={mockData.image} />
      <BackButton style={styles.backButton}/>
      <View style={styles.tabContainer}>
        <RenderTabs />
      </View>
      {renderContent}
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0
  },
  backButton: {
    marginTop: Constants.statusBarHeight,
    position: 'absolute',
    top: 0,
    left: 30
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
  },
  topImage: {
    height: 300,
    width: '100%'
  },
  tabHeaderText: {
    fontWeight: '700',
    fontSize: sizes.fontL,
    color: colors.gray5,
  },
  tabHeaderContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  activeTab: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2
  },
  activeText: {
    color: colors.primary,
  }
});
export default PlanDetails;