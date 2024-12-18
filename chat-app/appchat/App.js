import React from "react";
import AccountWork from "./Components/account/AccountWork";
import WelcomeScreen from "./Components/welcome/WelcomeScreen";
import Chatting from "./Components/chats/Chatting";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { UserProvider } from "./context/UserProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AlertNotificationRoot>
      <UserProvider>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          {/* <ActivityIndicator size="large" color="#1100ab" style={{transform: [{scaleX: 2}, {scaleY: 2}]}} /> */}
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Get-Started"
                component={WelcomeScreen}
                options={{
                  title: "Welcome",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Login/Signup"
                component={AccountWork}
                options={{
                  title: "Login/Signup",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Chats"
                component={Chatting}
                options={{
                  title: "Chat",
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </KeyboardAvoidingView>
      </UserProvider>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  navBarStyle: {
    backgroundColor: "rgb(9 141 247)",
  },
  navBarTitleStyle: {
    color: "white",
  },
});
