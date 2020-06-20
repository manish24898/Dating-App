import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationStackNavigator, MainTabsNavigator } from "../navigation/ScreenNavigators";
const AppNavigator = () => {

  //for temp.. get with redux code
  const isAuth = false;
  return (
    <NavigationContainer>
      {!isAuth && <AuthenticationStackNavigator />}
      {isAuth && <MainTabsNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
