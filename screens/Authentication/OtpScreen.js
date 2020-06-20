import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Picker,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Title from "../../components/UI/Title";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import Gradient from "../../components/UI/Gradient";

const OtpScreen = (props) => {
  const realOtp = "1111";
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);
  const [otp, setOtp] = useState({});

  //set no. of digits in otp

  useEffect(() => {
    let x = [];
    for (const key in otp) {
      x.push(otp[key]);
    }
    console.log(x);
    //check the otp and forward to next screen or show a button
    if (realOtp === x.join("")) {
      setIsOtpCorrect(true);
    } else {
      setIsOtpCorrect(false);
    }
  }, [otp]);
  const otpArray = [
    { value: null, inputRef: useRef() },
    { value: null, inputRef: useRef() },
    { value: null, inputRef: useRef() },
    { value: null, inputRef: useRef() },
  ];
  const otpInputs = otpArray.map((object, index) => (
    <TextInput
      maxLength={1}
      key={index}
      ref={object.inputRef}
      style={styles.otpInputItem}
      keyboardType="numeric"
      onChangeText={(text) => {
        onChangeTextHandler(text, index);
        setOtp((prev) => {
          if (prev[index]) {
            prev[index] = text;
            return prev;
          } else {
            return { ...prev, [index]: text };
          }
        });
      }}
      onKeyPress={(evt) => {
        onKeyPressHandler(evt.nativeEvent.key, index);
      }}
      secureTextEntry
    />
  ));
  const onKeyPressHandler = (key, index) => {
    if (key === "Backspace" && index !== 0) {
      otpArray[index - 1].inputRef.current.focus();
    }
  };
  const onChangeTextHandler = (text, index) => {
    if (index < otpInputs.length - 1 && text) {
      otpArray[index + 1].inputRef.current.focus();
    }
    if (index === otpInputs.length - 1) {
      otpArray[index].inputRef.current.blur();
    }
    //some check for number
    otpArray[index].value = text;
  };

  return (
    <Gradient>
    <View style={styles.main}>
      
      <Title style={styles.title}>Enter OTP</Title>
      <Text style={styles.descriptionText}>
        We have sent a 4 digit one time password to your mobile number
      </Text>

      <View style={styles.otpInput}>{otpInputs}</View>
      {isOtpCorrect ? (
        <View style={styles.buttonContainer}>
          <TouchableNativeFeedback onPress={() => {/*dispatch a action to set auth token*/}}>
            <FontAwesome name="arrow-circle-right" color="white" size={50} />
          </TouchableNativeFeedback>
        </View>
      ) : (
        <Text>Otp is not Correct!</Text>
      )}

      <TouchableOpacity style={{ flex: 1 }}>
        <View style={styles.resendBtn}>
          <Text style={styles.resendText}>Resend OTP</Text>
        </View>
      </TouchableOpacity>
    </View></Gradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,

    alignItems: "center",
   // backgroundColor: Colors.gradient1,
  },
  descriptionText: {
    color: "white",
    fontFamily: "open-sans-light",
    fontSize: 16,
    margin: 10,
    paddingHorizontal: 20,
  },
  otpInput: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    margin: 20,
  },
  otpInputItem: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    width: "15%",
    textAlign: "center",
    fontSize: 20,
  },
  resendBtn: {
    borderWidth: 2,
    borderColor: 'white',
    width: Dimensions.get("window").width * 0.7,
    margin: 20,
    padding: 5,
    height: 50,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
  },
  resendText: {
    flex: 1,
    fontFamily: "open-sans-light",
    fontSize: 20,
    color: "white",
  },
  buttonContainer: {
    margin: 30,
    overflow: "hidden",
    borderRadius: 30,
  },
});

export default OtpScreen;
