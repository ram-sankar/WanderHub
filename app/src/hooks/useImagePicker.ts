import { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';

export default function useImagePicker() {
  const [image, setImage] = useState<any>(null);
  const requestPermission = async() => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };

  useEffect(() => {
    requestPermission();
  }, [])

  return { image, pickImage }
}
