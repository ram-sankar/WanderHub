import React, { useState } from "react";
import { View, StyleSheet, FlatList, Image, Pressable, Dimensions  } from "react-native";
import { Ionicons, FontAwesome5  } from "@expo/vector-icons";
import { NavigationContext } from '@react-navigation/native';

import AppScreen from "../../components/AppScreen";
import AppSearchScreen from "../../components/AppSearchScreen";
import AppText from "../../components/AppText";
import { colors, sizes } from "../../constants/theme";
import routes from "../../navigator/routes";
import { userPostHome } from "../../constants/mocks";
import { UserPostEntity } from "../../constants/models/UserPost";

const screenWidth = Dimensions.get('window').width;

function UserPost() {
  const navigation = React.useContext(NavigationContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const submitSearch = (searchText: any) => {
    setIsModalVisible(false);
    console.log(searchText.nativeEvent.text);
  }

  const RenderModel = () => {
    return(
    <AppSearchScreen 
      isModalVisible={isModalVisible} 
      setIsModalVisible={setIsModalVisible}
      placeholderText="UserPost plans for city"
      submitSearch={submitSearch} 
    />
  )}

  const SearchBox = () => (
    <View style={styles.searchBoxContainer}>
      <Pressable onPress={() => setIsModalVisible(true)} style={styles.searchBox}>
        <AppText style={styles.searchBoxText}>Search post for city</AppText>
      </Pressable>
    </View>
  )

  const RenderList = ({item}: {item: UserPostEntity}) => (
      <Pressable onPress={() => navigation?.navigate(routes.POST_DETAILS, {id: item.id})} style={styles.listItem}>
        <Image source={item.image} style={styles.listImage} />
        <View style={styles.listBody}>
          <AppText style={styles.listTitle}>{item.title}</AppText>
          <View style={styles.listBottomSection}>
            <Image 
              source={item.ownerImage}
              style={styles.ownerImage}
            />
            <AppText style={styles.ownerName}>{item.ownerName}</AppText>
            <View style={styles.likesContainer}>
              <Ionicons style={styles.likesIcon} name="heart-outline" size={16} />
              <AppText>{item.likes}</AppText>
              <FontAwesome5 style={styles.likesIcon} name="eye" size={16} />
              <AppText>{item.views}</AppText>
            </View>
          </View>
        </View>
      </Pressable>
  )

  return (
    <AppScreen style={styles.container}>
      <FlatList
        data={userPostHome}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<SearchBox />}
        renderItem={RenderList}
        showsVerticalScrollIndicator={false}
      />
      {isModalVisible && <RenderModel />}
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  searchBoxContainer: {
    width: '100%',
    alignItems: 'center'
  },
  searchBox: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    borderColor: colors.darkGrey,
    marginVertical: 10
  },
  searchBoxText: {
    color: colors.gray4
  },
  listItem: {
    width: '90%',
    marginLeft: '5%',
    borderRadius: 10,
    backgroundColor: colors.white,
    marginVertical: 5,
    overflow: 'hidden'
  },
  listImage: {
    width: screenWidth * 0.9,
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
    fontSize: sizes.fontL
  }
});
export default UserPost;