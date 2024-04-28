import { StatusBar } from "expo-status-bar";
import AppNavigation from "./src/navigations/AppNavigation";
import { Button, Text } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar />
      <AppNavigation />
    </>
  );
}
