import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "../utils/routes";
import AuthNavigation from "./AuthNavigation";

const MainStack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={ROUTES.AUTH} component={AuthNavigation} />
    </MainStack.Navigator>
  );
}
