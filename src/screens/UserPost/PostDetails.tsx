import React, { useState, useContext } from "react";
import { View, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";

import AppScreen from "../../components/AppScreen";
import BackButton from "../../components/BackButton";
import { postDetails } from "../../constants/mocks";
import AppText from "../../components/AppText";
import { sizes } from "../../constants/theme";
import AppIcons from "../../components/AppIcons";
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";

function PostDetails({ route }: any) {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  // const { id } = route.params;
  const [isLiked, setIsLiked] = useState(false);
  const iconSize = 22, iconColor = theme.text;

  const OwnerSection = () => (
    <View style={styles.ownerSection}>
      <Image style={styles.ownerImage} source={postDetails.ownerImage}/>
      <View style={styles.nameAndDate}>
        <AppText style={styles.ownerName}>{postDetails.ownerName}</AppText>
        <AppText>{postDetails.postDate}</AppText>
      </View>
    </View>
  )

  const onLikePress = () => {
    setIsLiked(!isLiked);
  }

  const BottomSection = () => (
    <View style={styles.bottomContainer}>
      <Pressable onPress={onLikePress} style={styles.iconContainer}>
        {!isLiked && <AppIcons Icon="AntDesign" name="like2" size={iconSize} style={styles.bottomIcon} color={iconColor}/>}
        {isLiked && <AppIcons Icon="AntDesign" name="like1" size={iconSize} style={styles.bottomIcon} color={theme.primary}/>}
        <AppText>{postDetails.likes}</AppText>
      </Pressable>
      <Pressable onPress={onLikePress} style={styles.iconContainer}>
        <AppIcons Icon="FontAwesome5" name="eye" size={iconSize} style={styles.bottomIcon} color={iconColor}/>
        <AppText>{postDetails.views}</AppText>
      </Pressable>
      <Pressable onPress={onLikePress} style={styles.iconContainer}>
        <AppIcons Icon="FontAwesome" name="share" size={iconSize} style={styles.bottomIcon} color={iconColor}/>
        <AppText>Share</AppText>
      </Pressable>
    </View>
  )

  return (
    <AppScreen style={styles.container}>
        <Image style={styles.topImage} source={postDetails.image} />
        <BackButton style={styles.backButton}/>
      <ScrollView>
        <View style={styles.contentContainer}>
          <AppText style={styles.title}>{postDetails.title}</AppText>
          <OwnerSection />
          <AppText style={styles.overview}>{postDetails.overview}</AppText>
        </View>
      </ScrollView>
      <BottomSection />
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
  topImage: {
    height: 300,
    width: '100%'
  },
  contentContainer: {
    padding: sizes.padding,
    marginBottom: 40
  },
  title: {
    fontSize: sizes.fontXXL,
    fontWeight: '700'
  },
  ownerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  },
  ownerImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  ownerName: {
    fontSize: sizes.fontL,
    fontWeight: '700',
  },
  nameAndDate: {
    paddingLeft: 20
  },
  overview: {
    paddingTop: 10,
    textAlign: 'justify'
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.bg,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  bottomIcon: {
    paddingRight: 15
  }
});
export default PostDetails;