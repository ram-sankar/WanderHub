import React, { useState } from "react";
import { View, StyleSheet, FlatList, Image, Pressable } from "react-native";
import { Ionicons, FontAwesome5  } from "@expo/vector-icons";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import TextInput from "../components/TextInput";
import { colors } from "../constants/theme";

function Explore() {
  const [searchText, setSearchText] = useState('');
  const mockData = [
    {id: 1, title: 'Kudremuka', day: 3, night: 2, image: require("../assets/images/explore_1.png"), views: 340, likes: 27, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
    {id: 2, title: 'Kudremuka', day: 3, night: 2, image: require("../assets/images/explore_1.png"), views: 340, likes: 27, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
    {id: 3, title: 'Kudremuka', day: 3, night: 2, image: require("../assets/images/explore_1.png"), views: 340, likes: 27, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
    {id: 4, title: 'Kudremuka', day: 3, night: 2, image: require("../assets/images/explore_1.png"), views: 340, likes: 27, ownerImage: require("../assets/images/travelMonkey.jpg"), ownerName: 'Travel Monkey'},
  ]

  const onSearchIconClick = () => {
    console.log(searchText);
  }

  const SearchBox = () => (
    <View style={styles.searchBoxContainer}>
      <TextInput 
        onChangeText={(setSearchText)}
        value={searchText}
        width={'90%'}
        placeholder="Explore plans for city"
        style={styles.textInputStyling}
        containerStyling={styles.textInputContainerStyling}/>
      <Pressable onPress={onSearchIconClick}>
        <Ionicons name="search-outline" size={30} />
      </Pressable>
    </View>
  )

  const RenderList = ({item, index}) => (
    <View style={styles.listItem}>
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
          <View style={styles.likesContainer}>
            <Ionicons style={styles.likesIcon} name="heart-outline" size={18} />
            <AppText style={styles.likesText}>{item.likes}</AppText>
            <FontAwesome5 style={styles.likesIcon} name="eye" size={18} />
            <AppText style={styles.likesText}>{item.views}</AppText>
          </View>
        </View>
        <View style={styles.listBottomSection}>
          <Image 
            source={item.ownerImage}
            style={styles.ownerImage}
          />
          <AppText style={styles.ownerName}>{item.ownerName}</AppText>
        </View>

      </View>
    </View>
  )

  return (
    <AppScreen style={styles.container}>
      <FlatList
        data={mockData}
        keyboardDismissMode={'none'}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<SearchBox />}
        contentContainerStyle={styles.listContainer}
        renderItem={RenderList}
      />
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
  listContainer: {
    justifyContent: 'center',
    width: '90%',
  },
  listItem: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: colors.white,
    marginVertical: 5,
    overflow: 'hidden'
  },
  listImage: {
    width: '100%',
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
    flexDirection: 'row'
  },
  likesText: {
    fontSize: 16
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
    fontSize: 20
  },
  listDay: {
    color: colors.gray3
  }
});
export default Explore;