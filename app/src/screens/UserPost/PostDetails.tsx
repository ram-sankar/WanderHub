import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

import AppScreen from "../../components/AppScreen";
import BackButton from "../../components/BackButton";
import { postDetails } from "../../constants/mocks";
import AppText from "../../components/AppText";
import { sizes } from "../../constants/theme";

function PostDetails({ route }: any) {
  const { id } = route.params;
  console.log(id);

  const OwnerSection = () => (
    <View style={styles.ownerSection}>
      <Image style={styles.ownerImage} source={postDetails.ownerImage}/>
      <View style={styles.nameAndDate}>
        <AppText style={styles.ownerName}>{postDetails.ownerName}</AppText>
        <AppText>{postDetails.postDate}</AppText>
      </View>
    </View>
  )

  return (
    <AppScreen style={styles.container}>
      <Image style={styles.topImage} source={postDetails.image} />
      <BackButton style={styles.backButton}/>
      <View style={styles.contentContainer}>
        <AppText style={styles.title}>{postDetails.title}</AppText>
        <OwnerSection />
        <AppText style={styles.overview}>{postDetails.overview}</AppText>
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
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
    padding: sizes.padding
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
  }
});
export default PostDetails;