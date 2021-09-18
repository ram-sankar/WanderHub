import React from "react";
import { AntDesign, Ionicons, FontAwesome5, Feather, MaterialCommunityIcons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

function AppIcons({Icon, ...props}) {
  switch (Icon) {
    case 'Ionicons':
      return <Ionicons {...props}/>
    case 'Feather':
      return <Feather {...props}/>
    case 'FontAwesome5':
      return <FontAwesome5 {...props}/>
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...props}/>
    case 'FontAwesome':
      return <FontAwesome {...props}/>
    case 'MaterialIcons':
      return <MaterialIcons {...props}/>
    case 'AntDesign':
      return <AntDesign {...props}/>
    default:
      console.log(`${Icon} not found`)
      return null;
  }
}

export default AppIcons;