import React from 'react';
import { View, Image } from 'react-native';
import getAssetURL from '../../util/getAssetURL';
import FadeIn from 'react-native-fade-in-image';

const HeaderImage = ({ headerImage, style }) => {
  if (headerImage && headerImage.imageUrl) {
    return (
      <FadeIn placeholderStyle={{ backgroundColor: 'rgb(243, 249, 251)' }}>
        <Image
          style={[{
            width: '100%',
            height: 300,
          }, style]}
          source={{ uri: getAssetURL(headerImage.imageUrl) }}
        />
      </FadeIn>
    );
  } else {
    return <View />;
  }
};

export default HeaderImage;
