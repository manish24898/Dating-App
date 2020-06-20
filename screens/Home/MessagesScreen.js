import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MessagesScreen = (props) => {
  return (
    <View style={styles.main}>
      <Text>Messages Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default MessagesScreen;
