import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import SwipeButon from "./SwipeButon";
import Colors from "../../constants/Colors";
import LocationWidget from "./LocationWidget";
import AgeWidget from "./AgeWidget";
const SwipeCard = (props) => {
  //console.log('image', props.imageUrl)
  return (
    <View style={styles.main}>
      <View style={styles.image}>
        <ImageBackground
          source={{ uri: props.imageUrl }}
          style={styles.profileImage}
        >
          <View style={styles.assetContainer}>
            <LocationWidget>{props.location}</LocationWidget>
            <AgeWidget gender={props.gender}>{props.age}</AgeWidget>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.buttonContainer}>
        <SwipeButon type="PASS" onPress={props.onLeftButtonPress}></SwipeButon>
        <View style={styles.divider}></View>
        <SwipeButon type="LIKE" onPress={props.onRightButtonPress}></SwipeButon>
      </View>
    </View>
  );
};

export default SwipeCard;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    // borderColor: "blue",
    // borderWidth: 1,
    borderRadius: 30,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: "90%",
    overflow: "hidden",
  },
  profileImage: {
    borderTopLeftRadius: 30,
    height: "100%",
    width: "100%",
  },
  assetContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    height: "10%",
  },
  divider: {
    backgroundColor: "white",
    marginVertical: 10,
    borderWidth: 0.3,
    borderColor: Colors.grey,
  },
});
