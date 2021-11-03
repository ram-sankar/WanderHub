import React from "react";
import { AntDesign, Ionicons, FontAwesome5, Feather, MaterialCommunityIcons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

function AppIcons({Icon, forwardedRef, ...props}: Props) {
  switch (Icon) {
    case 'Ionicons':
      return <Ionicons ref={forwardedRef} {...props}/>
    case 'Feather':
      return <Feather ref={forwardedRef} {...props}/>
    case 'FontAwesome5':
      return <FontAwesome5 ref={forwardedRef} {...props}/>
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons ref={forwardedRef} {...props}/>
    case 'FontAwesome':
      return <FontAwesome ref={forwardedRef} {...props}/>
    case 'MaterialIcons':
      return <MaterialIcons ref={forwardedRef} {...props}/>
    case 'AntDesign':
      return <AntDesign ref={forwardedRef} {...props}/>
    default:
      console.log(`${Icon} not found`)
      return null;
  }
}

interface Props {
  Icon: string,
  forwardedRef?: any
  [props:string]: any;
}

export default AppIcons;