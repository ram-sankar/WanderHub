import React, {useState} from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

import AppScreen from "../components/AppScreen";
import BackButton from "../components/BackButton";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Avatar from "../components/Avatar";
import { mocks } from "../constants";
import { colors } from "../constants/theme";
import defaultStyles from "../constants/styles";

function Product({navigation, route: {params}}) {
  const [quantity, setQuantity] = useState(1);
  const [quantityLeft, setQuantityLeft] = useState(params.count);

  const descQty = () => {
    if (quantity > 1) {
      setQuantity(prevQty => prevQty - 1)
      setQuantityLeft(prevQty => prevQty + 1)
    }
  }

  const incQty = () => {
    if (quantity <= params.count) {
      setQuantity(prevQty => prevQty + 1)
      setQuantityLeft(prevQty => prevQty - 1)
    }
  }

  const Quantity = () => (
    <View style={[styles.displayFlex, styles.fullBorder]}>
      <Pressable onPress={descQty}>
        <AppText style={[styles.quantityBox, styles.backgroundGrey]}>-</AppText>
      </Pressable>
      <AppText style={[styles.quantityBox]}>{quantity}</AppText>
      <Pressable onPress={incQty}>
        <AppText style={[styles.quantityBox, styles.backgroundGrey]}>+</AppText>
      </Pressable>
    </View>
  )

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <BackButton style={styles.backButton}/>
        <View style={styles.flex1}></View>
        <Avatar source={mocks.profile.avatar}/>
      </View>
      <View style={styles.imageContainer}>
        <Image source={mocks.images.plant} style={styles.image}/>
      </View>

      <View style={styles.bottomCard}>
        <View style={styles.displayFlex}>
          <AppText style={[defaultStyles.headingText, styles.heading]}>{params.name}</AppText>
          <AppText style={[styles.subHeading]}>Qty Left: </AppText>
          <AppText style={[styles.subHeading, styles.primaryColor]}>{quantityLeft}</AppText>
        </View>

        <View style={[styles.displayFlex, styles.mb2]}>
          <AppText style={[styles.subHeading, styles.flex1]}>&#8377; 1,250</AppText>
          <Quantity />
        </View>

        <Pressable onPress={() => navigation.navigate('Details')}>
          <AppText style={styles.viewMore}>View More</AppText>
        </Pressable>
        <AppButton title='Buy Now' style={styles.cardButton}/>
      </View>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreen2
  },
  topHeadingContainer: {
    padding: 20,
    flexDirection: 'row'
  },
  backButton: {
    marginTop: -5,
  },
  image: {
    height: 350,
    width: 200,
  },
  imageContainer: {
    alignItems: 'center'
  },
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    width: '100%',
    height: 300,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    padding: 40
  },
  cardButton: {
    position: 'absolute',
    bottom: 30,
    left: '13%',
    width: '100%'
  },
  flex1: {
    flex: 1
  },
  displayFlex: {
    flexDirection: 'row'
  },
  heading: {
    flex: 1,
  },
  subHeading: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: 5,
  },
  greyColor: {
    color: colors.gray
  },
  primaryColor: {
    color: colors.primary
  },
  quantityBox: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: colors.black,
  },
  backgroundGrey: {
    backgroundColor: colors.appBackGround,
    borderRadius: 5,
  },
  mb2: {
    marginBottom: 15
  },
  viewMore: {
    color: colors.primary,
    fontWeight: '600'
  }
});

export default Product;