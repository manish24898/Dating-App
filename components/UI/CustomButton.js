import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

let TouchableCmp =
  Platform.OS === "android" && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

const CustomButton = (props) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableCmp
        onPress={props.onPress}
        //background={TouchableNativeFeedback.Ripple("#000000")}
      >
        <View style={{...styles.buttonContainer, ...props.buttonStyle}}>
        <View style={{width:35}}>
            <FontAwesome name={props.icon} size={30} color={props.textStyle.color} />
            </View>
          <View><Text style={{...styles.buttonText, ...props.textStyle}}>{props.children}</Text></View>
        </View>
        
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
      width:Dimensions.get('window').width * 0.90,
      height:60,
      borderRadius:20,
      overflow:'hidden',
      marginVertical:10,
  },
    buttonContainer: {
    flex:1,
    padding:20,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: "white",
    minWidth: 100,
    borderRadius: 10,
    overflow:'hidden',
    flexDirection:'row',
  },
  buttonText: {
    color: "#8159a7",
    fontFamily:'open-sans',
    fontSize:20,
  },
});

export default CustomButton;
