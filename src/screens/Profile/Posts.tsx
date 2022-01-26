import React, {useContext} from "react";
import { View, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import AppPopupMenu from "../../components/AppPopupMenu";
import { sizes } from "../../constants/theme";
import { Post } from "../../constants/models/Profile";
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";

const screenWidth = Dimensions.get('window').width;

function Posts({data}: {data: Post[]}) {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  
  const menuActions = [
    {id: 1, text: 'Edit'},
    {id: 2, text: 'Remove'},
  ]
  const onPopupEvent = (eventName: any) => {
    console.log(eventName);
  }

  const PostCard = ({item}: {item: Post}) => {
    if (item) {
      return (
        <TouchableOpacity style={styles.postContainer}>
          <Image source={item.image} style={styles.postImage}/>
          <View style={styles.postContent}>
            <View style={styles.postTextContainer}>
              <AppText style={styles.postName}>{item.name}</AppText>
              <AppText>{item.place}</AppText>
            </View>
            <AppPopupMenu actions={menuActions} onPress={onPopupEvent} />
          </View>
        </TouchableOpacity>
      )
    } else {
      return null;
    }
  }

  return (
    <AppScreen style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={PostCard}
        showsVerticalScrollIndicator={false}
      />
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    paddingTop: 0,
    width: '100%',
    marginVertical: 5,
    alignItems: 'center'
  },
  postContainer: {
    elevation: 1,
    width: screenWidth * 0.9,
    flexDirection: 'row',
    backgroundColor: theme.bg,
    borderRadius: 5,
    marginVertical: 10
  },
  postImage: {
    width: 100,
    height: 100,
  },
  postContent: {
    paddingVertical: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    flex: 1,
  },
  postTextContainer: {
    flex: 1,
  },
  menuIcon: {
    marginTop: 30
  },
  postName: {
    fontWeight: '700',
    fontSize: sizes.fontL
  }
});

export default Posts;