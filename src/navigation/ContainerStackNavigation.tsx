import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import CheckAuthenticationScreen from "../screen/authentication/checkAuthentication/CheckAuthenticationScreen";
import { HomeTabNavigation } from "./home/HomeTabNavigation";
import { AuthenticationStackNavigation } from "./authentication/AuthenticationStackNavigation";

const Stack = createStackNavigator();

const ContainerStackNavigation = () => {
  const {
    authState: { status },
  } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {status === "checking" && (
        <Stack.Screen
          name="CheckAuthenticationScreen"
          component={CheckAuthenticationScreen}
        />
      )}
      {status === "authenticated" ? (
        <Stack.Screen name="HomeTabNavigation" component={HomeTabNavigation} />
      ) : (
        <Stack.Screen
          name="AuthenticationStackNavigation"
          component={AuthenticationStackNavigation}
        />
      )}
    </Stack.Navigator>
  );
};

export default ContainerStackNavigation;

const styles = StyleSheet.create({});
