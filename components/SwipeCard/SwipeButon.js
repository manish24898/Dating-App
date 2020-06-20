import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../../constants/Colors";

let TouchableCmp =
  Platform.OS === "android" && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

const SwipeButon = (props) => {
  return (
    <TouchableCmp style={{ flex: 1 }} onPress={props.onPress}>
      <View style={{ ...styles.container }}>
        <Text style={{ ...styles.text, ...{color: props.type === 'LIKE' ? Colors.background : Colors.grey } }}>{props.type}</Text>
      </View>
    </TouchableCmp>
  );
};

export default SwipeButon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontFamily: "open-sans-bold", fontSize: 18 },
});
