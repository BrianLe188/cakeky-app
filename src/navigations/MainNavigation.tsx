import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./AuthNavigation";
import { ROUTES } from "@utils/constants/global";
import Home from "@screens/Home";

const MainStack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={ROUTES.AUTH} component={AuthNavigation} />
      <MainStack.Screen name={ROUTES.HOME} component={Home} />
    </MainStack.Navigator>
  );
}
