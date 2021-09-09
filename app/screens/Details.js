import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import Avatar from "../components/Avatar";
import BackButton from "../components/BackButton";
import { mocks } from "../constants";
import { colors } from "../constants/theme";

function Details({navigation}) {

  const { products } = mocks;

  const TopSection = () => (
    <View>
      <Image style={styles.topImage} source={require('../assets/images/plants_1.png')} />
      <BackButton style={styles.backButton} navigation={navigation} />
      <Avatar style={styles.avatar} source={mocks.profile.avatar} navigation={navigation} />
      
      <AppText style={styles.topText}>{products[0].name}</AppText>
      <AppText style={styles.description}>{products[0].description}</AppText>

      <View style={styles.horizontalLine}></View>

      <AppText style={styles.galleryText}>Gallery</AppText>
    </View>
  )

  const PhotoList  = () => (
    <FlatList
      data={products[0].images}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      columnWrapperStyle={styles.galleryContainer}
      ListHeaderComponent={<TopSection />}
      renderItem={(product) => (
        <Image 
          source={product.item}
          key={product.index}
          style={styles.galleryImage}
        />
      )}
    />
  )

  return (
    <AppScreen>
      <PhotoList />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  topImage: {
    height: 300,
    width: '100%'
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 30
  },
  avatar: {
    position: 'absolute',
    top: 10,
    right: 30
  },
  topText: {
    paddingHorizontal: 20,
    paddingTop: 15,
    fontWeight: '700',
    fontSize: 23
  },
  description: {
    paddingHorizontal: 20,
    paddingTop: 10,
    color: colors.gray,
    textAlign: 'justify'
  },
  horizontalLine: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
    marginVertical: 30,
    marginHorizontal: 30
  },
  galleryContainer: {
    paddingHorizontal: 20
  },
  galleryText: {
    fontWeight: '700',
    fontSize: 18,
    marginHorizontal: 30
  },
  galleryImage: {
    width: 100,
    height: 100,
    margin: 10
  }
});

export default Details;