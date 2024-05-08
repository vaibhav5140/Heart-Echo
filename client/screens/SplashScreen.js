// // SplashScreen.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Heart Echo</Text>
      <Image  source={{uri: "https://media.tenor.com/u1OC7Me_ovAAAAAi/covid-are-you-ok.gif"}}
        style={{width: 200, height: 200}} />
      {/* <Text style={styles.byText}>Developed by: Vaibhav</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1d5c9", 
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#1e2225", 
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 20,
    color: "#1e2225",
  },
  byText: {
    fontSize: 16,
    color: "#1e2225", 
    marginTop: 20,
  },
});

export default SplashScreen;

