import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Header = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("Home");
  };
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} />
        <Text style={styles.text}>DS Delivery</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DA5C5C",
    height: 90,
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: "OpenSans_700Bold",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: "#FFF",
    marginLeft: 15,
  },
});
