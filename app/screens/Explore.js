import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image, Pressable, Keyboard, Dimensions  } from "react-native";
import { Ionicons, FontAwesome5  } from "@expo/vector-icons";
import { NavigationContext } from '@react-navigation/native';

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import TextInput from "../components/TextInput";
import { colors, sizes } from "../constants/theme";
import { numberWithCommas } from "../common/helperFunctions";
import routes from "../navigator/routes";

const screenWidth = Dimensions.get('window').width;

function Explore() {
  const navigation = React.useContext(NavigationContext);
  const [searchText, setSearchText] = useState('');
  const mockData = [
    {id: 1, title: 'Kudremuka', cost: 450200, day: 3, night: 2, image: require("../assets/images/explore_1.png"), views: 340, likes: 27, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
    {id: 2, title: 'Kudremuka', cost: 4500, day: 3, night: 2, image: require("../assets/images/explore_1.png"), views: 340, likes: 27, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
    {id: 3, title: 'Kudremuka', cost: 4500, day: 3, night: 2, image: require("../assets/images/explore_1.png"), views: 340, likes: 27, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
    {id: 4, title: 'Kudremuka', cost: 4500, day: 3, night: 2, image: require("../assets/images/explore_1.png"), views: 340, likes: 27, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
  ]

  const onSearchIconClick = () => {
    Keyboard.dismiss();
    console.log(searchText);
  }

  const RenderList = () => (
    mockData.map((item, index) => (
      <Pressable onPress={() => navigation.navigate(routes.PLAN_DETAILS, {id: item.id})} style={styles.listItem} key={index}>
        <Image 
          source={item.image}
          key={index}
          style={styles.listImage}
        />
        <View style={styles.listBody}>
          <AppText style={styles.listTitle}>{item.title}</AppText>
          <View style={styles.listTopSection}>
            <View style={styles.titleContainer}>
              <AppText style={styles.listDay}>{item.day} Day & {item.night} Night</AppText>
            </View>
            <AppText style={styles.cost}>&#8377;{numberWithCommas(item.cost)}</AppText>
          </View>
          <View style={styles.listBottomSection}>
            <Image 
              source={item.ownerImage}
              style={styles.ownerImage}
            />
            <AppText style={styles.ownerName}>{item.ownerName}</AppText>
            <View style={styles.likesContainer}>
              <Ionicons style={styles.likesIcon} name="heart-outline" size={16} />
              <AppText style={styles.likesText}>{item.likes}</AppText>
              <FontAwesome5 style={styles.likesIcon} name="eye" size={16} />
              <AppText style={styles.likesText}>{item.views}</AppText>
            </View>
          </View>
        </View>
      </Pressable>
  )))

  return (
    <AppScreen style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <TextInput 
          onChangeText={setSearchText}
          value={searchText}
          width={'90%'}
          placeholder="Explore plans for city"
          style={styles.textInputStyling}
          containerStyling={styles.textInputContainerStyling}/>
        <Pressable onPress={onSearchIconClick}>
          <Ionicons name="search-outline" size={30} />
        </Pressable>
      </View>
      <ScrollView>
        <RenderList/>
      </ScrollView>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  searchBoxContainer:{
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  textInputContainerStyling: {
    borderColor: colors.darkGrey,
    borderWidth: 1,
    borderRadius: 25,
    marginRight: 10
  },
  listItem: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: colors.white,
    marginVertical: 5,
    overflow: 'hidden'
  },
  listImage: {
    width: screenWidth - 40,
    height: 200
  },
  listBody: {
    padding: 10,
  },
  ownerImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10
  },
  ownerName: {
    flex: 1,
    fontWeight: '700',
    color: colors.gray5
  },
  listTopSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10
  },
  titleContainer: {
    flex: 1
  },
  likesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10
  },
  likesIcon: {
    marginRight: 5,
    marginLeft: 15
  },
  listBottomSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listTitle: {
    color: colors.darkGrey,
    fontWeight: '700',
    fontSize: sizes.fontSubHeading
  },
  listDay: {
    color: colors.gray3
  },
  cost: {
    fontWeight: '700',
    marginRight: 10,
    color: colors.primary,
    fontSize: sizes.fontSubHeading
  }
});
export default Explore;