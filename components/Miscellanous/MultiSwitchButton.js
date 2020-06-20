import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Colors from '../../constants/Colors'
const TouchableCmp =
  Platform.OS === 'android' && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

const MultiSwitchButton = () => {
    const [personal, setPersonal] = useState(true);
    const [professional, setProfessional] = useState(false);
    const [home, setHome] = useState(false);

    const onPressHandler  = (name) => {
        if (name === 'personal')
        {
            setPersonal(true);
            setProfessional(false);
            setHome(false);
            return;
        }
        if (name === 'professional')
        {
            setPersonal(false);
            setProfessional(true);
            setHome(false);
            return;
        }
        if (name === 'home')
        {
            setPersonal(false);
            setProfessional(false);
            setHome(true);
            return;
        }
    }
  return (
    <View style={styles.main}>
     <View style={{flex:1, overflow:'hidden', borderRadius:40}}>
     <TouchableCmp onPress={onPressHandler.bind(this, 'personal')}>
        <View style={{...styles.buttonComponent, backgroundColor: personal ? Colors.background : 'white'}}>
          <Text style={{...styles.buttonText, color:personal ? 'white' : Colors.darkGrey}}>Personal</Text>
        </View>
      </TouchableCmp>
     </View>
     <View style={{flex:1, overflow:'hidden', borderRadius:40}}>
     <TouchableCmp onPress={onPressHandler.bind(this, 'professional')}>
        <View style={{...styles.buttonComponent, backgroundColor: professional ? Colors.background : 'white'}}>
          <Text style={{...styles.buttonText, color:professional ? 'white' : Colors.darkGrey}}>Professional</Text>
        </View>
      </TouchableCmp>
     </View>
     <View style={{flex:1, overflow:'hidden', borderRadius:40}}>
     <TouchableCmp onPress={onPressHandler.bind(this, 'home')}>
        <View  style={{...styles.buttonComponent, backgroundColor: home ? Colors.background : 'white'}}>
          <Text style={{...styles.buttonText, color:home ? 'white' : Colors.darkGrey}}>Home</Text>
        </View>
      </TouchableCmp>
     </View>
    </View>
  );
};

export default MultiSwitchButton;

const styles = StyleSheet.create({
  main: {
    elevation: 10,
    backgroundColor: 'white',
    width: '100%',
    height: 60,
    marginVertical: 25,
    borderRadius: 40,
    alignItems: 'center',
    flexDirection: 'row',
    //justifyContent:'space-between'
  },
  buttonComponent: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    overflow:'hidden',
    padding:5
  },
  buttonText:{
      fontFamily:'OpenSans-Regular',
      fontSize:14,
  }
});
