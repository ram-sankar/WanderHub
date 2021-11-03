import { useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';
import apiClient from './../api/client';
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";

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
        base64: true,
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

  const uploadToCloudinary = async (result:({ cancelled: false; } & ImageInfo), folderName: string) => {
    const formData = new FormData();
    formData.append("file", `data:image/jpg;base64,${result?.base64}`);
    formData.append("folder ", folderName);
    formData.append("upload_preset", "ihb77cgu");
    const response = await apiClient.post("https://api.cloudinary.com/v1_1/ramsankar/image/upload", formData);
    return response.data;
  }

  useEffect(() => {
    requestPermission();
  }, [])

  return { pickImage, uploadToCloudinary }
}