import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
const CoinsElement = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View style={{...styles.coinContainer, ...props.style}}>
        <MaterialCommunityIcons name="coin" color={Colors.coin} size={25} />
        <Text style={styles.text}>20</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoinsElement;

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 3,
    width: 60,
    borderRadius: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  text: {
    fontFamily: 'open-sans',
    color: '#444',
  },
});
