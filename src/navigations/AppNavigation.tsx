import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
