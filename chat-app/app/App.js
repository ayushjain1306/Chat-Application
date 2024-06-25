import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";
import AcccountWork from "./Components/account/AccountWork";

export default function App() {
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? "padding": "height"}
    //   style={styles.container}
    //   // keyboardVerticalOffset={Platform.select({ios: 0, android: 0})}
    // >
    <ScrollView contentContainerStyle={styles.scrollView}>
    <KeyboardAvoidingView 
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      behavior="height"
      enabled
      // keyboardVerticalOffset={10}
    >
      {/* <ScrollView> */}
        <AcccountWork />
    </KeyboardAvoidingView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flexGrow: 10
  }
})
