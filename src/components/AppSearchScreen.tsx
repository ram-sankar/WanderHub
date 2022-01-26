import React, {useState, useRef, useEffect, useContext } from "react";
import { View, Modal, StyleSheet, Pressable } from "react-native";

import AppIcons from "./AppIcons";
import TextInput from "./TextInput";
import ThemeContext from "../common/ThemeContext";
import { Themes } from "../constants/models/Common";

function AppSearchScreen({ isModalVisible, setIsModalVisible, placeholderText, submitSearch, ...rest }: Props) {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const [searchText, setSearchText] = useState('');
  const inputEl: any = useRef(null);

  useEffect(() => {
    setTimeout(() => inputEl?.current?.focus(), 100)
  }, [])

  return (
    <Modal
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
      {...rest}
    >
      <View style={styles.centeredView}>
        <View style={styles.searchBoxContainer}>
        <Pressable style={styles.backIcon} onPress={() => setIsModalVisible(false)}>
            <AppIcons
              Icon="FontAwesome"
              name='angle-left'
              backgroundColor={theme.transparent}
              iconColor={theme.text}
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

const useStyles = (theme: Themes) => StyleSheet.create({
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
    borderColor: theme.darkGrey,
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

interface Props {
  isModalVisible: boolean,
  setIsModalVisible: Function,
  placeholderText?: string,
  submitSearch: Function,
  [rest:string]: any,
}

export default AppSearchScreen;
