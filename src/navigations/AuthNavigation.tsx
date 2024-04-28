import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import ROUTES from "../utils/routes";
import Register from "../screens/Register";

const AuthStack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={ROUTES.LOGIN} component={Login} />
      <AuthStack.Screen name={ROUTES.REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
}
