import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./AuthNavigation";
import { ROUTES } from "src/utils/constants";

const MainStack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={ROUTES.AUTH} component={AuthNavigation} />
    </MainStack.Navigator>
  );
}
