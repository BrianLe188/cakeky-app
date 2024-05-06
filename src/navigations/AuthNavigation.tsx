import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { ROUTES } from "@utils/constants/global";

const AuthStack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={ROUTES.LOGIN} component={Login} />
      <AuthStack.Screen name={ROUTES.REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
}
