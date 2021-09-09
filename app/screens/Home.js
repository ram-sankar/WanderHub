import React, {useState} from "react";
import { Image, FlatList, TouchableOpacity, StyleSheet, View, Dimensions, Pressable } from "react-native";

import AppScreen from "../components/AppScreen";
import Avatar from "../components/Avatar";
import defaultStyles from "../constants/styles";
import { mocks } from "../constants";
import AppText from "../components/AppText";
import { colors, sizes } from "../constants/theme";

const { width } = Dimensions.get("window");

function Home({navigation}) {

  const tabHeaders = ["Products", "Inspirations", "Shop"];
  const [active, setActive] = useState("Products");
  const [categories, setCategories] = useState(mocks.categories);

  const handleTab = tab => {
    const filtered = mocks.categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );
    setActive(tab);
    setCategories(filtered);
  };

  const renderTab = tab => {
    const isActive = active === tab;
    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <AppText style={isActive ? styles.activeTabText : styles.normalTabText}>
          {tab}
        </AppText>
      </TouchableOpacity>
    );
  }

  const RenderItem = () => (
    <FlatList 
      data={categories}
      renderItem={(category) => (
        <View style={styles.card}>
          <Pressable onPress={() => navigation.navigate("Product", {name: category.item.name, count: category.item.count})}>
            <View style={styles.cardContent}>
              <View style={styles.cardImageContainer}>
                <Image style={styles.itemImage} source={category.item.image} />
              </View>
              <AppText style={styles.itemName}>{category.item.name}</AppText>
              <AppText style={styles.itemCount}>{category.item.count} products</AppText>
            </View>
          </Pressable>
        </View>
      )}
      numColumns={2}
    />
  )

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <AppText style={[defaultStyles.headingText, styles.heading]}>Browse</AppText>
        <Avatar source={mocks.profile.avatar} navigateTo="Profile" />
      </View>
      <View style={styles.tabContainer}>
        {tabHeaders.map(tab => renderTab(tab))}
      </View>
      <RenderItem />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: sizes.padding
  },
  topHeadingContainer: {
    flexDirection: 'row'
  },
  heading: {
    flex: 1
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
  },
  tab: {
    padding: 13,
  },
  active: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 5,
  },
  activeTabText: {
    fontWeight: '700',
    color: colors.primary,
  },
  normalTabText: {
    fontWeight: '700',
    color: colors.gray,
  },
  card: {
    backgroundColor: colors.white,
    flex: 0.5,
    // maxWidth: '45%',
    height: (width - sizes.padding * 3 - sizes.base)/2,
    margin: 10,
    justifyContent: 'space-around',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  cardImageContainer: {
    backgroundColor: colors.lightGreen,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemName: {
    fontWeight: '600',
    fontSize: 23
  },
  itemCount: {
    fontSize: 18,
    color: colors.gray2
  }
});

export default Home;