  
import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import { Image, View } from 'react-native';
import useImagePicker from '../../hooks/useImagePicker';
import { TouchableWithoutFeedback } from 'react-native';

export default function FormImagePicker({ name, isMultiSelect = false, imageStyle, AddImageButton }: Props) {
    const { pickImage } = useImagePicker();
    const { errors, setFieldValue, touched, values } = useFormikContext<any>();
    let imageUris: string;
    const splitName = name.split('.');
    if (splitName.length === 1) {
        imageUris = values[name];
    } else if (splitName.length === 3) {
        imageUris = values[splitName[0]][splitName[1]][splitName[2]];
    }

    const handleImageAdd = async () => {
        const result = await pickImage();
        setFieldValue(name, result?.uri);
    };

    // const handleImageRemove = (imageUri: any) => {
    //     setFieldValue(name,null);
    // };

    const SingleImage = () => (
        <View>
            {!imageUris && (<TouchableWithoutFeedback onPress={handleImageAdd}>
              <View>
                  <AddImageButton />
              </View>
            </TouchableWithoutFeedback>)}
            {!!imageUris && <Image source={{uri: imageUris}} style={imageStyle}/>}
        </View>
    )
    return (
        <>
            {!isMultiSelect && <SingleImage />}
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

interface Props {
    name: string,
    isMultiSelect?: boolean,
    imageStyle?: any,
    AddImageButton: () => JSX.Element
}