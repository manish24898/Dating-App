import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native';
import Colors from '../../constants/Colors'
const TouchableCmp =
  Platform.OS === 'android' && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

const PushButton = (props) => {
  return (
    <View style={{...styles.pushButton, ...props.style}}>
      <TouchableCmp style={{flex: 1}} onPress={props.onPress}>
        <View
          style={{
            width: '100%',
            padding: props.padding ? props.padding : 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{...styles.pushButtonText, ...props.textStyle}}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default PushButton;

const styles = StyleSheet.create({
  pushButton: {
    margin: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: Colors.background,
    overflow: 'hidden',
  },
  pushButtonText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: 'white',
  },
});
