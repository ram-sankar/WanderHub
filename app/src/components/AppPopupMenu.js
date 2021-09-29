import React, {useState} from "react";
import { Pressable, View } from "react-native";
import { Menu, MenuItem } from 'react-native-material-menu';

import { colors } from "../constants/theme";
import AppIcons from "./AppIcons";

function AppPopupMenu({actions, onPress}) {
  const [visible, setVisible] = useState(false);

  const handleMenuPress = () => setVisible(true);

  const handleOptionSelect = (option) => {
    onPress(option)
    setVisible(false);
  }

  const MenuIcon = () => (
    <Pressable onPress={handleMenuPress} style={{paddingHorizontal: 10}}>
      <AppIcons Icon="MaterialIcons" name="more-vert" size={24} color={colors.black}/>
    </Pressable>
  )

  const Options = () => (
    actions.map((option, index) => (
      <MenuItem key={index} onPress={() => handleOptionSelect(option)}>{option}</MenuItem>
    ))
  )

  return (
    <View>
      <Menu
        visible={visible}
        anchor={<MenuIcon />}
        onRequestClose={handleOptionSelect}
      >
        <Options />
      </Menu>
    </View>
  )
}

export default AppPopupMenu;