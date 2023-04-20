import React from "react";
import { View, Text, Button } from "react-native";
import StepCounter from "../components/StepCounter";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />

      <StepCounter />
    </View>
  );
}
