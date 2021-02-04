import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RoundedButton from "./RoundedButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <RoundedButton
        text="Next"
        textColor="white"
        backgroundColor="teal"
        onPress={() => console.log("Pressed Button")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
});
