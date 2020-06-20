import React from 'react';
import {StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
const CustomBlurView = () => {
  return (
    <BlurView
      style={styles.absolute}
      blurType='light'
      blurAmount={2}
      reducedTransparencyFallbackColor="black"
    />
  );
};

export default CustomBlurView;

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
});
