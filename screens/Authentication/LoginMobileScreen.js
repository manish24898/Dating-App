import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Picker,
  Dimensions,
  TouchableNativeFeedback
} from "react-native";
import Title from "../../components/UI/Title";
import Colors from "../../constants/Colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Gradient from "../../components/UI/Gradient";


const LoginMobileScreen = (props) => {
  const [countryCode, setCountryCode] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [isInputCorrect, setIsInputCorrect] = useState(false);

  const mobileNumberHandler = (text) => {
    const validDigits = "0123456789";
    let newText = "";
    if (text.length > 10) {
      return;
    }
    if (text.length > 0) {
      for (let i = 0; i < text.length; i++) {
        if (validDigits.indexOf(text[i]) > -1) {
          newText = newText + text[i];
        }
      }

      if (text.length === newText.length) {
        setMobileNumber(newText);
        if (newText.length === 10) {
          setIsInputCorrect(true);
        } else {
          setIsInputCorrect(false);
        }
      }
    } else {
      setMobileNumber("");
    }
  };
  return (
    <Gradient>
    <View style={styles.main}>
      
      <Title>Login with mobile</Title>
      <View style={styles.inputContainer}>
        <Picker
          mode="dropdown"
          style={styles.pickerInput}
          onValueChange={(value, index) => {
            setCountryCode(value);
          }}
          selectedValue={countryCode}
        >
          <Picker.Item label="+91" value="91" />
          <Picker.Item label="+1" value="1" />
        </Picker>
        <View style={styles.divider}></View>
        <TextInput
          keyboardType="numeric"
          style={styles.mobileInput}
          value={mobileNumber}
          onChangeText={(text) => {
            mobileNumberHandler(text);
          }}
          placeholder="Mobile Number"
        />
      </View>
      {isInputCorrect && (
        <View style={styles.buttonContainer}>
          <TouchableNativeFeedback onPress={() => {props.navigation.navigate('Otp')}}>
            <FontAwesome name="arrow-circle-right" color="white" size={50} />
          </TouchableNativeFeedback>
        </View>
      )}
      
    </View></Gradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,

    alignItems: "center",
   
  },
  inputContainer: {
    marginTop:30,
    width: "90%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    padding: 7,
  },
  pickerInput: {
    width: 95,
  },
  pickerItem: {
    fontSize: 20,
    color: "green",
  },
  divider: {
    borderWidth: 1,
    borderLeftColor: "rgba(6, 6, 6, 0.1)",
    marginRight: 15,
    height: "60%",
  },
  mobileInput: {
    fontSize: 20,
  },
  buttonContainer: {
    margin: 30,
    overflow: "hidden",
    borderRadius: 30,
  },
});

export default LoginMobileScreen;
