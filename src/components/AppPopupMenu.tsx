import React, {useState, useContext} from "react";
import { Pressable, View } from "react-native";
import { Menu, MenuItem } from 'react-native-material-menu';

import AppIcons from "./AppIcons";
import ThemeContext from "../common/ThemeContext";

function AppPopupMenu({actions, onPress, isIconVertical=true}: Props) {
  const { theme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);

  const handleMenuPress = () => setVisible(true);

  const handleOptionSelect = (option: ActionsEntity) => {
    onPress(option.id)
    setVisible(false);
  }

  const MenuIcon = () => (
    <Pressable onPress={handleMenuPress} style={{paddingHorizontal: 10}}>
      <AppIcons Icon="MaterialIcons" name={isIconVertical ? "more-vert" : "more-horiz"} size={24} color={theme.text}/>
    </Pressable>
  )

  const Options = () => (
    <>
    {actions.map((option: ActionsEntity, index: number) => (
      <MenuItem key={index} onPress={() => handleOptionSelect(option)}>{option.text}</MenuItem>
    ))}
    </>
  )

  return (
    <View>
      <Menu
        visible={visible}
        anchor={<MenuIcon />}
        onRequestClose={() => setVisible(false)}
      >
        <Options />
      </Menu>
    </View>
  )
}

interface Props {
  actions: ActionsEntity[], 
  onPress: Function,
  isIconVertical?: boolean
}
interface ActionsEntity {
  id: number,
  text: string
}

export default AppPopupMenu;