
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation";
import SplashScreen from "./screens/SplashScreen";

export default function App() {
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    
    setTimeout(() => {
      setAppReady(true);
    }, 5000); // Adjust the duration as needed
  }, []);

  return (
    <NavigationContainer>
      {isAppReady ? <RootNavigation /> : <SplashScreen />}
    </NavigationContainer>
  );
}
