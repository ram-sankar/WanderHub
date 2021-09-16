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
  const mockData = {id: 1, title: 'Kudremuka', cost: 450200, day: 3, night: 2, image: require("../../assets/images/hillWithFalls.jpg"), views: 340, likes: 27, ownerImage: require("../../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'};
  const tabHeaders = ['Overview', 'Itinerary', 'Contact'];
  const tabComponents = [<Overview />, <Itinerary />, <Contact />];
  
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
    fontSize: sizes.fontSubHeading,
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