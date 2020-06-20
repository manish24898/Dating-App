import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/UI/CustomButton";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Gradient from "../../components/UI/Gradient";
const LoginScreen = (props) => {
  const onPressHandler = () => {
    props.navigation.navigate("LoginWithMobile");
  };

  return (
    <View style={styles.mainContainer}>
      <Gradient>
      <View style={styles.logo}>
        <MaterialCommunityIcons name="fire" size={200} color={"orange"} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          buttonStyle={{}}
          textStyle={{ color: "black" }}
          icon={"mobile-phone"}
          onPress={onPressHandler}
        >
          Connect with Mobile
        </CustomButton>
        <CustomButton
          buttonStyle={{ backgroundColor: Colors.linkedin }}
          textStyle={{ color: "white" }}
          icon={"linkedin"}
          onPress={onPressHandler}
        >
          Connect with LinkedIn
        </CustomButton>
        <CustomButton
          buttonStyle={{ backgroundColor: Colors.facebook }}
          textStyle={{ color: "white" }}
          icon={"facebook"}
          onPress={onPressHandler}
        >
          Connect with Facebook
        </CustomButton>
      </View>
      <View style={styles.footerContainer}>
        <View>
          <Text style={styles.footerTextNormal}>
            By Signing in, you agree to our
          </Text>
        </View>
        <View>
          <Text style={styles.footerTextHighlight}>
            Terms of Service{" "}
            <Text
              style={{
                fontWeight: "none",
                fontSize: 16,
                fontFamily: "open-sans-light",
              }}
            >
              and{" "}
            </Text>
            Privacy Policy
          </Text>
        </View>
      </View></Gradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
   
    flex: 1,
  },
  logo: {
    height: "45%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  footerContainer: {
    flex: 1,
    paddingVertical: 20,

    justifyContent: "flex-end",
    alignItems: "center",
  },
  footerTextNormal: {
    fontFamily: "open-sans-light",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  footerTextHighlight: {
    fontFamily: "open-sans-semibold",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});

export default LoginScreen;
