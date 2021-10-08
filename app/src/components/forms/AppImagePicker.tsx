import React, {useEffect} from "react";
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import { colors } from "../../constants/theme";
import { FixMeLater } from "../../constants/models/AddContent";

function ImageInput({ imageUri, onImageRemove, onImageAdd }: FixMeLater) {

  const requestPermission = async() => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }
  useEffect(() => {
    requestPermission();
  }, [])

  const handlePress = () => {
    if(!imageUri) selectImage();
    else{
      Alert.alert("Delete", "Are you sure you want to delete?", [
        {text: 'yes', onPress: () => onImageRemove(imageUri)},
        {text: 'No'}
      ]
      )
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5
      });
      if(!result.cancelled) onImageAdd(result.uri);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {typeof imageUri !== 'string' &&(
          <MaterialCommunityIcons name='camera' color={colors.medium} size={40}/> 
        )}
        {typeof imageUri === 'string' && <Image source={{uri: imageUri}} style={styles.image}/>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    width: 100,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ImageInput;
