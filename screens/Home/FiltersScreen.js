import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ScrollView
} from 'react-native';
import RangeSlider from 'rn-range-slider';
import Colors from '../../constants/Colors';
import PushButton from '../../components/UI/PushButton';

const TouchableCmp =
  Platform.OS === 'android' && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

const FiltersScreen = props => {
  const [distance, setDistance] = useState(1);
  const [ageRange, setAgeRange] = useState([18, 24]);

  const [guysSelected, setIsGuysSelected] = useState(false);
  const [girlsSelected, setIsGirlsSelected] = useState(false);
  const [bothSelected, setIsBothSelected] = useState(true);

  const highlightBackground = {
    backgroundColor: Colors.background,
  };

  const selectHandler = label => {
    if (label === 'guys') {
      setIsGuysSelected(true);
      setIsGirlsSelected(false);
      setIsBothSelected(false);
      return;
    }
    if (label === 'girls') {
      setIsGuysSelected(false);
      setIsGirlsSelected(true);
      setIsBothSelected(false);
      return;
    }
    if (label === 'both') {
      setIsGuysSelected(false);
      setIsGirlsSelected(false);
      setIsBothSelected(true);
      return;
    }
  };

  return (
    <View style={styles.main}>
      <ScrollView>
      <Text style={styles.label}>Show me</Text>
      <View style={styles.showMeBtnContainer}>
        <TouchableCmp onPress={selectHandler.bind(this, 'guys')}>
          <View
            style={[
              {
                ...styles.showMeBtn,
                borderTopLeftRadius: 40,
                borderBottomLeftRadius: 30,
              },
              guysSelected ? highlightBackground : null,
            ]}>
            <Text style={styles.label}>Guys</Text>
          </View>
        </TouchableCmp>
        <TouchableCmp onPress={selectHandler.bind(this, 'girls')}>
          <View
            style={[
              {...styles.showMeBtn},
              girlsSelected ? highlightBackground : null,
            ]}>
            <Text style={styles.label}>Girls</Text>
          </View>
        </TouchableCmp>
        <TouchableCmp onPress={selectHandler.bind(this, 'both')}>
          <View
            style={[
              {
                ...styles.showMeBtn,
                borderTopRightRadius: 40,
                borderBottomRightRadius: 30,
              },
              bothSelected ? highlightBackground : null,
            ]}>
            <Text style={styles.label}>Both</Text>
          </View>
        </TouchableCmp>
      </View>

      <Text style={styles.label}>Location</Text>

      <View style={styles.locationHolder}>
        <Text style={styles.label}>Current Location (San Francisco)</Text>
      </View>

      <View style={styles.labelValue}>
        <Text style={styles.label}>Distance</Text>
        <Text style={styles.label}>{distance} km</Text>
      </View>
      <RangeSlider
        rangeEnabled={false}
        min={1}
        max={90}
        labelStyle={'none'}
        thumbBorderColor="#ffffff"
        thumbRadius={20}
        thumbColor={Colors.background}
        thumbBorderWidth={4}
        style={styles.slider}
        gravity={'center'}
        lineWidth={7}
        step={1}
        valueType={'number'}
        selectionColor={Colors.background}
        blankColor={Colors.darkGrey}
        onValueChanged={value => {
          setDistance(value);
        }}
      />

      <View style={styles.labelValue}>
        <Text style={styles.label}>Age Range</Text>
        <Text style={styles.label}>{ageRange.join('-')}</Text>
      </View>
      <RangeSlider
        style={styles.slider}
        gravity={'center'}
        min={18}
        max={35}
        labelStyle={'none'}
        thumbBorderColor="#ffffff"
        thumbRadius={20}
        thumbColor={Colors.background}
        thumbBorderWidth={4}
        style={styles.slider}
        gravity={'center'}
        lineWidth={7}
        step={1}
        valueType={'number'}
        selectionColor={Colors.background}
        blankColor={Colors.darkGrey}
        onValueChanged={(low, high, fromUser) => {
          setAgeRange([low, high]);
        }}
      />
      
      <PushButton title='Save' />
      </ScrollView>
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  main: {
    // borderColor: 'green',
    // borderWidth: 1,

    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  label: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  labelValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  showMeBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: Colors.lightGrey,
    width: '100%',
    height: 60,
    borderRadius: 40,
    overflow: 'hidden',
  },
  showMeBtn: {
    // borderColor: 'green',
    // borderWidth: 1,
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationHolder: {
    backgroundColor: Colors.lightGrey,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 50,
    borderRadius: 40,
  },
  slider: {
    width: '100%',
    height: 50,

    // borderWidth:1,
    // borderColor:'black'
  },
  
});
