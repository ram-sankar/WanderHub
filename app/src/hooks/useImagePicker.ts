import { useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';

export default function useImagePicker() {
  const requestPermission = async() => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        return result;
      }
      return null;
    } catch (error) {
      console.log(error)
      return null;
    }
  };

  useEffect(() => {
    requestPermission();
  }, [])

  return { pickImage }
}
