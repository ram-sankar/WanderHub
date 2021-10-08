  
import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import AppImagePicker from './AppImagePicker';
import { Image } from 'react-native';

export default function FormImagePicker({ name, isMultiSelect = false, imageStyle }: Props) {
    const { errors, setFieldValue, touched, values } = useFormikContext<any>();
    let imageUris;
    const splitName = name.split('.');
    if (splitName.length === 1) {
        imageUris = values[name];
    } else if (splitName.length === 3) {
        imageUris = values[splitName[0]][splitName[1]][splitName[2]];
    }

    console.log(imageUris);
    
    
    const handleImageAdd = (imageUri: any) => {
        setFieldValue(name, imageUri);
    };

    const handleImageRemove = (imageUri: any) => {
        setFieldValue(
            name,
            null
        );
    };
    return (
        <>
            <AppImagePicker 
                imageUris={imageUris} 
                onImageRemove={handleImageRemove}
                onImageAdd={handleImageAdd}
              />
              {!!imageUris && <Image source={{uri: imageUris}} style={imageStyle}/>}
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

interface Props {
    name: string,
    isMultiSelect?: boolean,
    imageStyle?: any
}