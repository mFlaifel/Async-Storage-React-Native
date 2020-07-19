import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const { width, height } = Dimensions.get("screen");

export default function App() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View style={styles.container}>
      {userName || password ? (
        <View>
          <Text>userName:{userName}</Text>
          <Text>password:{password}</Text>
        </View>
      ) : null}
      <Text style={styles.labelTexts}>user name:</Text>
      <TextInput
        value={userName}
        autoCompleteType={"name"}
        style={styles.textFiled}
        onChange={(e) => setUserName(e.nativeEvent.text)}
      />
      <Text>Password:</Text>
      <TextInput
        value={password}
        secureTextEntry={true} //to hide text while typing
        autoCompleteType={"password"}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        style={styles.textFiled}
      />
      <View style={styles.styledButton}>
        <Button title={"Submit"}></Button>
      </View>
      <View style={styles.styledButton}>
        <Button title={"logOff"}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textFiled: {
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    width: width - 40,
  },
  styledButton: {
    marginTop: 10,
    width: width - 40,
  },
});
