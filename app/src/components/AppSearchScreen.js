import React, {useState, useRef, useEffect } from "react";
import { View, Modal, StyleSheet, Pressable } from "react-native";

import { colors } from "../constants/theme";
import AppIcons from "./AppIcons";
import TextInput from "./TextInput";

function AppSearchScreen({ isModalVisible, setIsModalVisible, placeholderText, submitSearch, ...rest }) {
  const [searchText, setSearchText] = useState('');
  const inputEl = useRef(null);

  useEffect(() => {
    setTimeout(() => inputEl.current.focus(), 100)
    // inputEl.current.focus();
  }, [])

  return (
    <Modal
      visible={isModalVisible}
      {...rest}
    >
      <View style={styles.centeredView}>
        <View style={styles.searchBoxContainer}>
        <Pressable style={styles.backIcon} onPress={() => setIsModalVisible(false)}>
            <AppIcons
              Icon="FontAwesome"
              name='angle-left'
              backgroundColor={colors.transparent}
              iconColor={colors.black}
              size={35}
            />
          </Pressable>
          <TextInput 
            innerRef={inputEl} 
            onChangeText={setSearchText}
            value={searchText}
            placeholder={placeholderText}
            clearButtonMode="unless-editing"
            onSubmitEditing={submitSearch}
            containerStyling={styles.textInputContainerStyling}/>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: '100%',
    width: '90%',
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
    marginRight: 10,
    width: '90%',
    height: 40,
    marginLeft: 10,
  },
  backIcon: {
    marginRight: 5
  }
});
export default AppSearchScreen;
