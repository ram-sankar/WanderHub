import React, { useState, useContext } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import Constants from "expo-constants";
import 
AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import BackButton from "../../components/BackButton";
import { sizes } from "../../constants/theme";
import Overview from "./Overview";
import Itinerary from "./Itinerary";
import Contact from "./Contact";
import { planDetails } from "../../constants/mocks";
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";

function PlanDetails({ route }: any) {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const { id } = route.params;
  console.log(id);
  const userPreference = { isLiked: false, isBookMarked: false}
  
  const dataToComponent = {...planDetails, ...userPreference};
  const tabHeaders = ['Overview', 'Itinerary', 'Contact'];
  const tabComponents = [<Overview data={dataToComponent} />, <Itinerary data={dataToComponent} />, <Contact data={dataToComponent} />];
  
  const [activeTab, setActiveTab] = useState(tabHeaders[0]);
  const [renderContent, setRenderContent] = useState(tabComponents[0])

  const handleTabChange = (tab: string, index: number) => {
    setActiveTab(tab);
    setRenderContent(tabComponents[index])
  }
  
  const RenderTabs = () => (
    <>
      {tabHeaders.map((tab, index) => (
        <Pressable style={[styles.tabHeaderContainer, activeTab===tab && styles.activeTab]} onPress={() => handleTabChange(tab, index)} key={index}>
            <AppText style={[styles.tabHeaderText, activeTab===tab && styles.activeText]}>{tab}</AppText>
        </Pressable>
      ))}
    </>
  )

  return (
    <AppScreen style={styles.container}>
      <Image style={styles.topImage} source={planDetails.image} />
      <BackButton style={styles.backButton}/>
      <View style={styles.tabContainer}>
        <RenderTabs />
      </View>
      {renderContent}
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingHorizontal: 0
  },
  backButton: {
    marginTop: Constants.statusBarHeight,
    position: 'absolute',
    top: 0,
    left: 10
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: theme.gray2,
    borderBottomWidth: 1,
  },
  topImage: {
    height: 300,
    width: '100%'
  },
  tabHeaderText: {
    fontWeight: '700',
    fontSize: sizes.fontL,
    color: theme.gray5,
  },
  tabHeaderContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  activeTab: {
    borderBottomColor: theme.primary,
    borderBottomWidth: 2
  },
  activeText: {
    color: theme.primary,
  }
});
export default PlanDetails;