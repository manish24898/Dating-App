import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

const HeaderElement = props => {
return <View style={{...styles.main, ...props.style}} >{props.children}</View>;
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
    height: Dimensions.get('window').height * 0.1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
});

export default HeaderElement;
