import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import GameLiveScreen from "./Screens/GameLiveScreen";
import GameOverScreen from "./Screens/GameOverScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Gamelive"
            component={GameLiveScreen}
            options={headerOptions1}
          />
          <Stack.Screen
            name="GameOver"
            component={GameOverScreen}
            options={headerOptions2}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const headerOptions1 = {
  headerStyle: {
    backgroundColor: "lightgreen",
  },
  headerTitleAlign: "center",
  headerTintColor: "black",
};
const headerOptions2 = {
  headerStyle: {
    backgroundColor: "#FF8000",
  },
  headerTitleAlign: "center",
  headerTintColor: "black",
  headerBackVisible: false,
};
